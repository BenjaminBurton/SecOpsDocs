---
sidebar_position: 4
---

# Creating a Zero Trust Environment

```md title="Load Lab Configuration"
Open the browser (Chromium or Firefox) `your decision`
Type `https://192.168.1.254` press `enter`
When you see Your Connection is not private message on page
Click on the ADVANCED Link
Then proceed to th ip address `192.168.1.254`
Login to the firewall web Interface
Username `admin`
Passwaord `Pal0Alt0!`
In the web Interface navigate to Device from the top selections
Select Setup on the right of the interface page with the selections
Above the configuration management window Select `Operations`
Choose `Load named configuration snapshot` from `Load`
In the load config window Select `pan-cf-lab-03.xml` (Lab 3) from the dropdown
Press `OK`
When the message in the Loading Configuration window pops up close the window
Check the Task manager in the bottom of the interface page verify the load was successful
Click `close`
Commit the changes located at the top-right of the web interface
In the commit window click commit to proceed with the committing changes
When the operation successfully completes click close to continue.

:::warning

Notice the warnings in the commit section

:::

:::note

The commit process takes changes made to the Firewall and copies them to the running configuration, which will activate all configuration changes since the last commit

:::


## Create three Basic zones (inside, outside && dmz)
```md title="Create Zones && Associate the Zones to Interfaces"
Navigate to Network from the top selections on the interface
Select Zones && click Add at the bottom-left of the center section
In the zone window type `outside` in the name field
Change Type to `Layer 3`
Click `OK` button
In the zone window type `inside` in the name field
Change Type to `Layer 3`
Click `OK` button
In the zone window type `dmz` in the name field
Change Type to `Layer 3`
Click `OK` button

:::note

You have created a zone for each interface. This will keep the traffic between each inteface in each zone w/ an interface

:::

```md title="Navigate to Network in the top selections of the interface"
Select Interfaces and click ethernet1/1
In the Ethernet Interface window select outside from the `Security Zone` dropdown
Click the `OK` button
Select Interfaces and click ethernet1/2
In the Ethernet Interface window select inside from the `Security Zone` dropdown
Click the `OK` button
this will bring up a warning window click `Yes`
```

:::warning

Warning advises if you attach this interface management profile to this interface, you are potentially exposing the firewall's administrative interface to any party that can reach this interface.

:::

```md
Select Interfaces and click ethernet1/3
In the Ethernet Interface window select dmz from the `Security Zone` dropdown
Click the `OK` button
```

```md title="Create a Security Policy Rule"
Navigate to policies from the top selections on the Interface
Choose Security from the 