---
id: version-15.0-a-quick-guide-to-ip-addressing
title: A quick guide to IP addressing
sidebar_label: A quick guide to IP addressing
original_id: a-quick-guide-to-ip-addressing
---

Every device on a network must have a unique IP address. IP addresses have the format `w.x.y.z` where `w`, `x`, `y` and `z` are numbers between 0 and 255, for example `192.168.0.1`. The address can be set manually (this is called a **Static** IP address) or can be automatically allocated by the network (using a system called **DHCP**). In lighting networks static addressing is normally used, it takes a bit more time to set up but you then know for sure what the address is for each device.

For devices to be able to "see" each other on the network, they must be in the same **Subnet** - this is the first part of the IP address. Each device has a **Subnet Mask** which sets the parts of the IP address which must match for the devices to be able to see each other, and which parts must be different. 

Subnet Masks are often set to `255.255.255.0` which means that the `w` `x` and `y` numbers must match but the `z` number must be different. So if the console was set at `192.168.1.1` then the subnet would be `192.168.1.z` and all the other devices would be `192.168.1.2`, `192.168.1.3` and so on.

If your IP address is allocated by DHCP then the Subnet Mask is set automatically. Subnet masks are sometimes referred to as `/24` or `/8`, this is the number of bits set to 1 in the mask. Each number in the mask is 8 bits so `255.255.255.0` can also be called `/24`, or `255.0.0.0.` would be `/8`.


Choosing an IP address and Subnet Mask
--------------------------------------

This is the hardest part of setting up a network as a suitable IP address totally depends on what you are using on the network and what IP addresses you can and cannot change. Some older Art-Net equipment is fixed to the address range `2.x.y.z` or `10.x.y.z` which means everything else has to use that range as well. But if none of your equipment is fixed, the address range `192.168.1.x` is often used.

Below are a number of example scenarios for standard lighting networks using a Titan console and what IP addresses should be set. *These aren't guaranteed to work but try them if the scenario matches your network.*

### Titan and TNP with all output operating as standard DMX

Device            | IP Address        | Subnet Mask
---               | ---               | ---
Titan Console     | `192.168.1.30`    | `255.255.255.0`
TNP               | `192.168.1.31`    | `255.255.255.0`

### Titan outputting over Art-Net Fixtures (and DMX)

Device            | IP Address        | Subnet Mask
---               | ---               | ---
Titan Console     | `10.100.100.100`  | `255.0.0.0`
Art-Net Fixtures  | `10.x.y.z` **\*** | `255.0.0.0`

(the `2.x.y.z` range can also be used for Art-Net if required but see section on Private Address ranges below).

**\*** *Where a combination of `x`, `y` and `z` are unique for these fixtures.*

### Titan and TNP outputting over Art-Net (and DMX)

Device            | IP Address        | Subnet Mask
---               | ---               | ---
Titan Console     | `2.100.100.100`   | `255.0.0.0`
TNP               | `2.100.100.101`   | `255.0.0.0`
Art-Net Fixtures  | `2.x.y.z` **\***  | `255.0.0.0`

*Alternatively:*

Device            | IP Address        | Subnet Mask
---               | ---               | ---
Titan Console     | `10.100.100.100`  | `255.0.0.0`
TNP               | `10.100.100.101`  | `255.0.0.0`
Art-Net Fixtures  | `10.x.y.z` **\*** | `255.0.0.0`

**\*** *Where a combination of `x`, `y` and `z` are unique for these fixtures.*

> It's best to avoid using 255 in the IP address because if the unmasked part of an IP address is set to 255, this acts as a broadcast address (for example `192.168.1.255` would be a broadcast address if the mask is `255.255.255.0`, or `10.255.255.255` would be broadcast if the mask is `255.0.0.0`).

If your network is connected to the internet
-------------------------

If at all possible you should use a dedicated network for lighting with no external connections. However if your network has to be connected to the internet it is important to use one of the following ranges of **private** IP addresses. These are special IP addresses that will not
be routed onto the internet. They are:

Start Address  | Final Address    | Subnet Mask
--- | --- | ---
10.0.0.0 | 10.255.255.255 | 255.0.0.0 (/8)
172.16.0.0 | 172.31.255.255 | 255.240.0.0 (/12)
192.168.0.0 | 192.168.255.255 | 255.255.0.0 (/16)

> For Art-Net, the 10.x.y.z range may need to be used if you have devices which are fixed to this address range.
