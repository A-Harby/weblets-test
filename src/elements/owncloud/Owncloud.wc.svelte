<svelte:options tag="tf-owncloud" />

<script lang="ts">
  // Types
  import type { IFormField, ITab } from "../../types";
  import type { IProfile } from "../../types/Profile";
  import { Disk, Env } from "../../types/vm";
  import Owncloud from "../../types/owncloud";
  // Modules
  import deployOwncloud from "../../utils/deployOwncloud";
  // Components
  import SelectProfile from "../../components/SelectProfile.svelte";
  import Input from "../../components/Input.svelte";
  import Tabs from "../../components/Tabs.svelte";
  import SelectNodeId from "../../components/SelectNodeId.svelte";
  import DeployBtn from "../../components/DeployBtn.svelte";
  import Alert from "../../components/Alert.svelte";
  import Modal from "../../components/DeploymentModal.svelte";
  import AlertDetailed from "../../components/AlertDetailed.svelte";
  import hasEnoughBalance from "../../utils/hasEnoughBalance";
  import validateName, {
    isInvalid,
    validateCpu,
    validateEmail,
    validateOptionalEmail,
    validateDisk,
    validateMemory,
    validatePortNumber,
  } from "../../utils/validateName";
  import validateDomainName from "../../utils/validateDomainName";

  import { noActiveProfile } from "../../utils/message";
  import rootFs from "../../utils/rootFs";

  let data = new Owncloud();
  let domain: string, planetaryIP: string;

  data.disks = [new Disk()];
  let profile: IProfile;
  let active: string = "base";
  let loading = false;
  let success = false;
  let failed = false;

  const tabs: ITab[] = [
    { label: "Base", value: "base" },
    { label: "Mail Server", value: "mail" },
  ];

  const nameField: IFormField = { label: "Name", placeholder: "Owncloud Instance Name", symbol: "name", type: "text", validator: validateName, invalid: false }; // prettier-ignore

  let adminFields: IFormField[] = [
    {
      label: "Admin User Name",
      symbol: "adminUsername",
      placeholder: "admin",
      type: "text",
      validator: validateName,
      invalid: false,
    },
    {
      label:
        "Admin Password (It's important to save the admin username and password for login)",
      symbol: "adminPassword",
      placeholder: "password",
      type: "password",
      invalid: false,
    },
    {
      label: "Admin Email Address",
      symbol: "adminEmail",
      placeholder: "admin@example.com",
      type: "text",
      validator: validateEmail,
      invalid: false,
    },
  ];

  let mailFields: IFormField[] = [
    {
      label: "Host Name",
      symbol: "smtpHost",
      placeholder: "smtp.example.com",
      type: "text",
      validator: validateDomainName,
      invalid: false,
    },
    {
      label: "Port",
      symbol: "smtpPort",
      placeholder: "587",
      type: "text",
      validator: validatePortNumber,
      invalid: false,
    },
    {
      label: "User Name",
      symbol: "smtpHostUser",
      placeholder: "user@example.com",
      type: "text",
      validator: validateOptionalEmail,
      invalid: false,
    },
    {
      label: "Password",
      symbol: "smtpHostPassword",
      placeholder: "password",
      type: "password",
      invalid: false,
    },
  ];

  let message: string;
  let modalData: Object;
  let status: "valid" | "invalid";

  const deploymentStore = window.configs?.deploymentStore;

  $: disabled = ((loading || !data.valid) && !(success || failed)) || !profile || status !== "valid" || nameField.invalid; // prettier-ignore
  const currentDeployment = window.configs?.currentDeploymentStore;

  async function onDeployVM() {
    loading = true;
    success = false;
    failed = false;
    message = undefined;

    if (!hasEnoughBalance()) {
      failed = true;
      loading = false;
      message =
        "No enough balance to execute! Transaction requires 2 TFT at least in your wallet.";
      return;
    }
    deployOwncloud(data, profile)
      .then((data) => {
        deploymentStore.set(0);
        success = true;
        modalData = data.deployment;
        domain = data.domain;
        planetaryIP = data.planetaryIP;
      })
      .catch((err: Error) => {
        failed = true;
        message = typeof err === "string" ? err : err.message;
      })
      .finally(() => {
        loading = false;
      });
  }

  $: logs = $currentDeployment;
</script>

<SelectProfile
  on:profile={({ detail }) => {
    profile = detail;
    if (detail) {
      data.envs[0] = new Env(undefined, "SSH_KEY", detail?.sshKey);
    }
  }}
/>

<div style="padding: 15px;">
  <form on:submit|preventDefault={onDeployVM} class="box">
    <h4 class="is-size-4">Deploy an owncloud Instance</h4>
    <hr />

    {#if loading || (logs !== null && logs.type === "VM")}
      <Alert type="info" message={logs?.message ?? "Loading..."} />
    {:else if !profile}
      <Alert type="info" message={noActiveProfile} />
    {:else if success}
      <AlertDetailed
        type="success"
        message="Successfully deployed owncloud."
        {planetaryIP}
        {domain}
        deployed={true}
      />
    {:else if failed}
      <Alert type="danger" message={message || "Failed to deploy owncloud."} />
    {:else}
      <Tabs bind:active {tabs} />

      {#if active === "base"}
        <Input
          bind:data={data.name}
          bind:invalid={nameField.invalid}
          field={nameField}
        />

        {#each adminFields as field (field.symbol)}
          {#if field.invalid !== undefined}
            <Input
              bind:data={data[field.symbol]}
              bind:invalid={field.invalid}
              {field}
            />
          {:else}
            <Input bind:data={data[field.symbol]} {field} />
          {/if}
        {/each}

        <SelectNodeId
          publicIp={data.publicIp}
          cpu={data.cpu}
          memory={data.memory}
          ssd={data.disks.reduce((total, disk) => total + disk.size, 0)}
          bind:nodeSelection={data.selection.type}
          bind:data={data.nodeId}
          filters={data.selection.filters}
          bind:status
          {profile}
          on:fetch={({ detail }) => (data.selection.nodes = detail)}
          nodes={data.selection.nodes}
        />
      {:else if active === "mail"}
        <div class="notification is-warning is-light">
          <p>
            configure these settings only If you have an smtp service and you
            know what you’re doing.
          </p>
        </div>
        {#each mailFields as field (field.symbol)}
          {#if field.invalid !== undefined}
            <Input
              bind:data={data[field.symbol]}
              bind:invalid={field.invalid}
              {field}
            />
          {:else}
            <Input bind:data={data[field.symbol]} {field} />
          {/if}
        {/each}
      {/if}
    {/if}

    <DeployBtn
      {disabled}
      {loading}
      {failed}
      {success}
      on:click={(e) => {
        if (success || failed) {
          e.preventDefault();
          success = false;
          failed = false;
          loading = false;
        }
      }}
    />
  </form>
</div>
{#if modalData}
  <Modal data={modalData} on:closed={() => (modalData = null)} />
{/if}

<style lang="scss" scoped>
  @import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");
</style>