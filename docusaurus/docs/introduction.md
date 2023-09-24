---
title: Introduction
hide_title: true
---

<Advanced/>

### What is it?

`qbittorrent-nox-static.sh` was originally a simple, amateurish bash script, to build a static `qbittorrent-nox` binary for `x86_64`. The script has grown and evolved since then and now it's a complicated bash script.

It handles a lot of the nuanced complexity around building various different dependencies on two different host platforms, towards the same outcome, whilst targeting these architectures:

`armel` - `armhf` - `armv7` - `aarch64` - `x86_64` - `x86` - `s390x` - `powerpc` - `ppc64el` - `mips` - `mipsel` - `mips64` - `mips64el` - `riscv64`

This is done using <Tips>Debian crossbuild essentials:crossbuild-essentials</Tips> or <Tips>Musl Cross make toolchains:musl-cross-make</Tips>, depending on the host build platform.

Taking advantage of <Tips>Github Workflows:github-workflows</Tips> it has been designed to easily forked and reused. Fork it, customise it and build and release your own binaries.

:::tip The hard part is done.
You always have a easy method available to you to build your own releases, simply by forking the repo and using the available workflows. How to do this will be shown in the <Tips>Github Actions:github-actions</Tips> sections later on. You can build locally or fork the repo and build and release using CI where the git repo acts as a local environment to the script.
:::

### What does it do?

Simply put, on supported host build platforms the `qbittorrent-nox-static.sh` will perform these three main tasks:

- Update the system and install the core build dependencies based on activated options - Requires root privileges if any dependencies are missing.

- Download and build the `qbittorrent-nox` dependencies locally with no special privileges required.

- Build a fully static and portable `qbittorrent-nox` binary which automatically uses the latest version of all supported dependencies.

The more advanced features will be discussed in their relevant sections.

### What is the outcome

🔵 Here is an example successful default build profile:

```none
qBittorrent 4.5.1 was built with the following libraries:

Qt: 6.5.0
Libtorrent: 2.0.8
Boost: 1.81.0
OpenSSL: 3.1.0
zlib: 1.2.13.zlib-ng
```

<Tabs>
  <TabItem value="Debian based Linux" label="🔹 debian" default>

The script creates a fully static `qbittorrent-nox` binary using [libc](https://www.gnu.org/software/libc/)

The final result will show this when using `ldd`

```bash
ldd ~/qbt-build/bin/qbittorrent-nox
```

Gives this result:

```bash
not a dynamic executable
```

  </TabItem>
  <TabItem value="Alpine linux" label="🔹 alpine">

The script creates a fully static `qbittorrent-nox` binary using [musl](https://wiki.musl-libc.org/)

The final result will show this when using `ldd`

```bash
ldd ~/qbt-build/bin/qbittorrent-nox
```

Gives this result:

```bash
statically linked
```

  </TabItem>
</Tabs>

The script can do a lot of helpful things to make building and deploying a fully static qBittorrent binary about as easy as it's going to get.

### How do I use it?

The script can be downloaded locally and run on a supported host or via docker. It has a comprehensive help section built in, available via the `-h` flag, that explains all options and demonstrates dynamic command choices.

:::tip
The best thing to do is read the script installation and usage sections to understand the key features and how to user them.
:::

<Advanced>

:::caution
Certain build combinations require `qemu` and `binfmts` on the host to complete successfully.

It's highly recommend that you use a `qemu` + `binfmts` + `Docker` to build on a local host machine with no issues
:::

</Advanced>
