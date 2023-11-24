---
sidebar_position: 2
---

# Configuring TCP/IP

## Configuring TCP/IP and a Virtual Router

## Objective

- Configure Ethernet interfaces with Layer 3 Information
- Create a Virtual Router
- Verify the Network Connectivity

## Steps to configure TCP/IP

- Load Lab Configuration
- Use whichever browser you prefer
- Log in to the Client PC w/ username && Password
- Click Advanced && Proceed to Log in to the Firewall web interface
- In the dashboard Select the device option on the top far left
- Select the Setup from the options on the far left
- Select Operations next to Management
- In the Configuration Management next to load
- Select ( Load named configuration snapshot )

- In Load window Configuration select pan-cf-lab-01.xml from the dropdown
- Click OK && close the following window

- Click the Task Icon at the bottom right of Interface
- Verify the Load has successfully completed

- Commit the changes in the top-right of the Interface

- When the commit window pops up Click commit to proceed with the changes

- When the commit operation completes, click Close

:::tip

The commit process takes changes made to the Firewall and copies them to the running configuration, which will activate all configuration changes since the last commit.

:::

## Configure Ethernet Interfaces with Layer 3 Information

- Select Xfce Terminal in the Taskbar

- In the Terminal ping 192.168.1.1 -c 3 ( -c 3 for 3 request checking connectivity )

:::tip

notice the response: “Destination host unreachable.” This indicates that there is no network connectivity between the Client and the Firewall

:::

- Close the Terminal window by typing exit then press Enter.

- In the Firewall Admin Page Select Network in the selections on top

- Then Select Interfaces in the left side of page

- Select Ethernet in the row of selections

- Click on the interface ethernet1/2 from the list In the Ethernet Interface window
- In the Interface dropdown select Layer3
- In the Security Zone dropdown, select inside

:::tip

Layer 3 is selected so that the Firewall interface can be given an IP address, assigned a zone, and a virtual router.

:::

- In the Ethernet Interface window, click on the IPv4 tab
- click on the Add button at the bottom-left.
- Type 192.168.1.1/24 in the address field.

- Click on the Advanced tab
- Click the Management Profile dropdown
- Select allow-mgmt and click OK.

:::tip

The allow-mgmt Management Profile allows the interface to accept pings and to accept management functions such as configuring the Firewall with SSH or a web browser.

:::

- In the Warning window, click Yes.

:::tip

The Warning advises that if you attach this interface management profile to this interface, you are potentially exposing the firewall’s administrative interface to any party that can reach this interface. For the purpose of this lab, you will bypass this warning knowing that it is not good practice to attach a management profile to a production interface.

:::

- Commit the changes located at the top-right of the web interface.

- In the Commit window, proceed with committing the changes.

- When the commit operation successfully completes, click Close to continue.

:::tip

Notice the warnings in the Commit section. You will resolve this in the next section.

:::

## Create a Virtual Router

- Select Network inFirewal Interface
- Select Virtual Router on Left side Panel

- Click Add, at the bottom-left, to create a new virtual router.

- In the Virtual Router window, type VR-1 in the Name field.

- Click on the Add button and select ethernet1/1 from the dropdown.

- Click on the Add button and select ethernet1/2.

:::tip

Adding interfaces to the virtual router will allow the networks assigned to these interfaces to route between one another.

:::

- Click the Static Routes tab and click the Add button at the bottom- left.

- In the Virtual Router – Static Route – Ipv4 window, type default-route in the Name field. Next, type 0.0.0.0/0 in the Destination field. Then, in the Interface dropdown, select ethernet1/1. Finally, in the Next Hop dropdown, ensure IP Address is selected, and in the field below it, type 203.0.113.1, and then click OK.

- Adding a static route of 0.0.0.0/0 is sometimes called the gateway of last resort. By adding this static route, if there is a network that the Firewall does not know about, it will forward the packets to this address. Click OK to close the Virtual Router window.

- Commit the changes located at the top-right of the web interface.

- In the Commit window, click Commit to proceed with committing the changes.

- When the commit operation successfully completes, click Close to continue.

## Verify Network Connectivity

- Open Xfce Terminal

- In the Terminal ping 192.168.1.1 -c 3

:::tip

Notice the ping command will receive replies from 192.168.1.1. This means that packets can be sent and received between the Client and the Firewall.

:::

- Close the Terminal window by typing exit then press Enter.

- Open a new tab in the browser of your choice

- type the web address https://192.168.1.1

- Click on the ADVANCED link.

- Click on Proceed to 192.168.1.1 (unsafe).

- You should see the Firewall login web interface on the 192.168.1.1 IP address that was configured earlier.
