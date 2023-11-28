---
sidebar_position: 5
---

# Configuring Authentication

## Configure the Firewall to use a Captive Portal to Authenticate

## Objective
- Configure a Local User Account && Authentication Profile
- Enable the Captive Portal && Enable Web-Form based Logins
- Create an Authentication Policy

```md title="Load Lab Configuration"
Open the client (Chromium or Firefox)
Type `https://192.168.1.254` and press Enter
When you see "Your connection is private" Click the Advanced Link
```

:::note

If you experience the "Unable to connect" or "502 Bad Gateway" message while attempting to connect to the specified IP above, please wait an additional 1-3 minutes for the Firewall to fully initialize. Refresh the page to continue.

:::

```md
CLICK ON PROCEED TO 192.168.1.254 (unsafe)
```

```md title="Login to the Firewall web Interface"
username `admin`
password `Pal0Alt0!`
```

```md title="Configuration Management"
Navigate to Device form the top selections of the Interface
Select setup from the selections on the left 
Select Operations above the Configuration Management window
Choose `Load named Configuration snapshot`
In the Load named Configuration window Select `pan-cf-lab-04.xml` from the dropdown
Click `OK`
Close the Config message window that says `Configuration being loaded`
Check Task Manager for status (Located in the bottom-right of web interface)
The task manager window verifies the load type has successfully completed
click `Close` to continue
Lastly Click the commit link located in the top-right of the interface
When the commit window pops up click commit to commit the changes.
Click `Close` to continue When the commit operation completes successfully 
```

:::note

The commit process takes changes made to the firewall && copies them to the running configuration, which will activate all configuration changes since last the commit.

:::

```md title="Configure a Local User Account && Authentication Profile"
Navigate to Network in the top selections of the interface
Select zones from the selections on the left side of interface
Click on `inside` zone
In zone window, click the `Enable User Identification` checkbox under User Identification ACL
Then click `OK`
```

:::note

This will enable the inside zone to use a Username for Authentication

:::









