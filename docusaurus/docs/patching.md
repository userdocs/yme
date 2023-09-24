---
title: Patching
hide_title: true
---

<Advanced/>

## Patching info

The script supports the automatic patching of libtorrent and qbittorrent when building, providing certain conditions are met. You can do it in two ways, local or via a GitHub repo. Let's take a look at these methods.

> [!tip|iconVisibility:hidden|labelVisibility:hidden|style:callout] Use the help command to get more infomation
>
> ```bash
> bash ~/qbittorrent-nox-static.sh -h-pr
> ```

### Local patching via boot strapping

Here we will look bootstrapping the build process to make patching simple

> [!note|iconVisibility:hidden|labelVisibility:hidden|style:callout] Using this command:
>
> ```bash
> bash ~/qbittorrent-nox-static.sh -bs
> ```
>
> the script will create the required directory structure using the current defaults.

The directory structure that will be created will look like this:

```bash
qbt-build/patches/qbittorrent/4.5.0
qbt-build/patches/libtorrent/v1.2.18
```

Place your patch file named `patch` inside the relevant directories. So it would look something like this:

```bash
qbt-build/patches/qbittorrent/4.5.0/patch
qbt-build/patches/libtorrent/v1.2.18/patch
```

Then the patch file will be automatically matched to the tag used by the script and loaded.

### Using custom qBittorrent and libtorrent tags

> [!tip|iconVisibility:hidden|labelVisibility:hidden|style:callout] Using custom qBittorrent and libtorrent tags

You can change the defaults by using the `qt` and `lt` switches to specify a tag. So for example if you used this command:

`bash ~/qbittorrent-nox-static.sh -qt master -lt RC_2_0 -bs`

The boot strapped directory structure will look like this instead:

```bash
qbt-build/patches/qbittorrent/master
qbt-build/patches/libtorrent/RC_2_0
```

> [!warning|iconVisibility:hidden|labelVisibility:hidden|style:callout] Remember to provide the same tags when using the build command or the patches won't match the defaults.

```bash
bash ~/qbittorrent-nox-static.sh -qt master -lt RC_2_0 all
```

## Git based patching

Instead of a local patch you can use github hosted patch files. Your patches need to be hosted in the root of the repo like this:

<!-- tabs:start -->

<!-- tab: qbittorrent -->

```bash
patches/qbittorrent/master/patch
patches/qbittorrent/4.5.0/patch
```

<!-- tab: libtorrent -->

```bash
patches/libtorrent/RC_2_0/patch
patches/libtorrent/RC_1_2/patch
patches/libtorrent/v1.2.12/patch
```

<!-- tabs:end -->

The all you do is use the `pr` switch when using the script. The repo URL is abbreviated to your username and repo:

`bash ~/qbittorrent-nox-static.sh all -pr username/repo`

Then the patch file will be automatically matched to the tag used by the script and loaded.

### How to make a patch

Using qbittorrent as an example we will edit the `src/base/bittorrent/session.cpp` to apply some session defaults.

Download the relevant git repo:

```bash
git clone --no-tags --single-branch --branch release-4.5.0 --shallow-submodules --recurse-submodules --depth 1 https://github.com/qbittorrent/qBittorrent.git
```

Copy the file that we need to edit to our home directory.

```bash
cp qBittorrent/src/base/bittorrent/session.cpp ~/session.cpp
```

Now edit the `~/session.cpp`. Once you have finished making your changes you can create a patch file using this command

```bash
diff -Naru qBittorrent/src/base/bittorrent/session.cpp ~/session.cpp > ~/patch
```

Then you place that patch file in the matching tag directory.

```bash
patches/qbittorrent/4.3.4.1/patch
```

### Using a Github pull request or commit

First, it's sensible to make sure the patch that we want to use is from a pull request on the same branch that we are building against. So when using `release-4.5.0` we should use https://github.com/qbittorrent/qBittorrent/tree/v4_5_x

You can see the branches for qBittorrent here - https://github.com/qbittorrent/qBittorrent/branches

When you are on a commit or pull request you simply add `.patch` to the end of the url.

So here we take the pull request or commit URL

https://github.com/qbittorrent/qBittorrent/pull/18271

https://github.com/qbittorrent/qBittorrent/commit/c924904308e806db6e1b321da18c1f91c4e8f8bf

and add `.patch` to it so it becomes this

https://github.com/qbittorrent/qBittorrent/pull/18271.patch

https://github.com/qbittorrent/qBittorrent/commit/c924904308e806db6e1b321da18c1f91c4e8f8bf.patch

You can download these using `curl` or `wget` and use these as patches in custom builds.
