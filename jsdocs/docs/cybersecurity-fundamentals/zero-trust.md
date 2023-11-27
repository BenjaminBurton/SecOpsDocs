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
```

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
```

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
Choose Security from the selections on the right of the interface
Click `Add` at the bottom-left of the Interface
In the Security Policy Rule window Type `Allow-Inside-Out` in the name field
```

:::note Security Policy Rule"

In a Security Policy Rule, there are three required sections. Note the initial red Squiggle Lines under General, Source, Destinantion. Thesewill go away as you fill out the required information.

:::

```md title="Security Policy Rule"
In the policy rule window click on the `Source Tab`
Then Click the `Add` button in the Zone section
Then Select `inside` from the dropdown in the `Source Zone Column`
```

:::note 

The Source tab allows you to select where traffic is coming from. In this rule, you select traffic coming from the inside zone. Note tht you leave the deafult setting of any source address. This allows any address in the inside zone to pass through

:::

```md
In the Security Policy Rule window , click on the Destination tab. Then, click the `Add` button in the Destination Zone section. Next, select outside from the dropdown in the Destination Zone column.
```

:::note

The Destination tab allows you to select where traffic is going to. In this rule, you select traffic destined to the outside zone. Note that you leave the deafult setting of any destination address. This allows the source traffic to communicate with any address in the destination.

:::

```md
In Security Policy Rule Window
Click on the `Application` tab. Then, Make sure that the Any checkbox is checked.
```

:::note

The Application tab allows you to select predefined applications to allow through the Firewall. The Palo Alto Networks Firewall can be very precise on the traffic it allows. The Any chckbox allows any application through. In a real-world deployment, you may use a similar rule for testing traffic without any restrictions.

:::

```md
In the Security rule window
Click on th `Service/URL Category` tab
Make sure application default is selected in the dropdown above the service section
```

:::note

The Service/URL Category tab allows you to select predefined services or preset groups to allow through the Firewall. The application-default selection means that the selected applications are allowed or denied only on their default ports defined by Palo Alto Networks. This option is recommended for allowing policies because it prevents applications from running on unusual ports and protocols, which if not intentional, can be a sign of undesired application behavior and usage. When you use this option, the device still checks for all applications on all ports, but with this configuration, applications are only allowed on their default ports/protocols.

:::

```md
In the Security Policy Rule window, click on the Actions tab. Then, make sure Log at Session End is checked under the Log Setting section. Next, select Profiles from the dropdown under the Profile Setting section. Then, select default for the Antivirus, Vulnerability Protection, Anti-Spyware, URL Filtering, and WildFire Analysis fields. Finally, click the OK button.
```

:::note

The Actions tab allows you to decide what to do with the traffic you have defined. In this rule, you use the default Allow action setting to permit traffic. Selecting Log at Session End is considered best practice as applications are likely to change throughout the lifespan of the session. Facebook, for example, will start as web- browsing and change to Facebook-base after the firewall recognized the application.
The various profile settings allow for predefined signatures and threats to be assessed by the Firewall. At a minimum it is best practice to select the default profiles. There are additional best practices for each individual profile defined in the technical documentation available at Palo Alto Networks.

:::

```md
Click on the Allow-Inside-Out to reopen the Security Policy Rule.
In the Security Policy Rule window, an additional tab named Usage will be displayed. Click on the Usage tab. You can now Compare Applications & Applications Seen. Because there is nothing to see right now, click OK to exit the Security Policy Rule window.
```

:::note

The Usage tab allows you to evaluate the rule’s usage, number of applications seen on the rule, when the last application was seen on the rule, hit count, traffic over the past 30 days, and when the rule was created and last edited.
The Compare Applications & Applications seen allows you to access the tools to help you mitigate from port-based security policy rules to application-based security policy rules. This also allows you to exclude unused applications from in Applications & Usage.

:::

```md
Click on the number 3, to select but not open the interzone-default security policy.
With the interzone-default policy selected, click on the Override button at the bottom of the center section.
In the Security Policy Rule – predefined window, click on the Actions tab. Then, select the Log at Session End checkbox under the Log Settings section. Finally, click the OK button.
```


# Create a basic NAT policy to NAT traffic from the inside zone to the outside zone.
```md title="Create a NAT Policy"
Navigate to Policies > NAT > Add.
```
```md
In the NAT Policy Rule window, type Inside-NAT-Outside in the Name field
In the NAT Policy Rule window, click on the Original Packet tab. Then, click the Add button at the bottom of the Source Zone section. Next, select inside in the dropdown of the Source Zone column. Finally, select outside in the Destination Zone dropdown.
```
```md
In the NAT Policy Rule window, click on the Translated Packet tab. Then, select Dynamic IP And Port on the Translation Type dropdown. Next, select Interface Address on the Address Type dropdown. Then, select ethernet1/1 for the Interface dropdown. Finally, select 203.0.113.20/24 on the IP Address dropdown and click the OK button.
```

# Commit and Test the Rules and Policies
## Create a basic NAT policy to NAT traffic from the inside zone to the outside zone.

```md
Click the Commit link located at the top-right of the web interface.
In the Commit window, click Commit to proceed with committing the changes.
When the commit operation successfully completes, verify there are no warnings
under the Commit section, then click Close to continue.
Open Firefox from the taskbar.In the address bar, type https://www.facebook.com and press Enter.
Click the X in the upper-right to close Firefox.
Navigate to Monitor > Logs > Traffic.
In the filter text box, type rule eq ‘Allow-Inside-Out’ and (app eq ‘facebook-base’) and press Enter. You will see log entries allowing the facebook-base application.
```