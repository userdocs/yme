---
title: Prerequisite Check list
hide_title: true
---

<Advanced/>

:::note Github meets all the requirements
Github workflows can meet all these requirements to build and patch and is free to use and takes a fixed amount of time.
:::

<Advanced>

:::tip Optional - Paid service for faster build times
For faster build times you can consider a paid service like <Tips>buildjet.com:buildjet</Tips> to use as self hosted runners with the Github Actions
:::tip

</Advanced>

If you want self host you need to be able to meet these conditions on your host in order to use the script.

:::caution Supported host build platforms
✅ Debian: `Bullseye`

✅ Ubuntu: `Focal` `Jammy`

✅ Alpine: `3.10` or greater

✅ WSL2 images of the above hosts (not recommended if you actively use the image)

✅ WSL2 + docker of the above hosts
:::

:::caution Bash Shell
✅ This is 100% a modern bash shell script and it requires having access to bash to run it.
:::

:::caution sudo or root privileges
✅ The script needs to install some system dependencies in order to proceed and if you do not have permission or access to do this or no access to docker to use a container you must find a more suitable host environment.
:::

:::caution Emulation requirements
✅ If you build using Qt6 you will need to have these dependencies installed on the host, <Tips>qemu and binmtfs:qemu</Tips>

<Tabs>
<TabItem value="Debian based Linux" label="🔹debian" default>

```bash
sudo apt install qemu-user-static binfmt-support
```

</TabItem>
<TabItem value="Alpine linux" label="🔹alpine">

```bash
sudo apk add qemu qemu-openrc
```

</TabItem>
</Tabs>
:::
