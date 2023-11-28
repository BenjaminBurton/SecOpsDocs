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


```md
Navigate to `Device` in the top selections of the interface
On the far-left side of the interface select `Users` (you may have to scroll down)
Click `Add` in the window to add a User
In the Local User window Type `lab-web` in the Name field
Then Type `Pal0Alt0!` in the Password and confirm fields
Then click the `OK` button
```

```md
Navigate to device in the top selections of the interface
Select Authentication Profile on the far-right side of the interface
Click `Add` at the bottom-left in the interface 
In the Authentication Profile window Type `Local-Auth-Profile` in the name field
In the Type box Select `Local Database` from the dropdown
Also In the Authentication Profile window click on the `Advanced` tab
Then click the `Add` button
Next select `all` from the dropdown in the Allow List column
Lastly click the `OK` button
```

```md title="Enable the Authentication Portal && Enable Web-Form based Logins"
Enable a Captive Portal and use a web form for login
Navigate to Device form the top selections in th interface
Select `User Identification` to open up the Authentication Portal
Under the Authentication Portal Settings click the `gear icon`
In the Authentication Portal window click the `Enable Authentication Portal` checkbox
Select `Local-Auth-Profile` from the Authentication Profile dropdown
click `OK` button
```

:::note

This will turn on the Authentication Portal for web-form logins and associate it with the Local-Auth-Profile you created earlier.

:::

```md
Navigate to Objects from the top selection in the interface
select Authentication from the choices in the far-right column
Click checkbox beside the default-web-form and click `Clone`
In the Clone window click the `OK` button to confirm the clone
Notice the new entry named `default-web-form-1` has been created
click on the `default-web-form-1`
In the Authentication Enforcement window Type `local-web-form-auth` in the Name field
Then select `Local-Auth-Profile` in the Authentication Profile dropdown
Next Click the `OK` button
```


```md title="Create an Authentication Policy"
Navigate to Policies in the top selections in the interface
Select Authentication from the choices in the far-left column
Then click `Add` in the bottom-left of the screen
In the Authentication Policy Rule Window Type `web-form-policy` in th name field
In the Authentication Policy Rule Window click on the `Source` tab
Click `Add` button in Source Zone section
Next select `inside`
In the Authentication Policy Rule Window click on the `Service/URL Category` tab
Then click on the `Add` button in the Service section
Next select `service-https`
In the Authentication Policy Rule Window click on the `Actions` tab
Then select `local-web-form-auth` from the Authentication Enforcement dropdown
Then click the `OK` button
```


```md title="Commit && Test Authentication Policy"
Click `Commit` at the top-right of the interface
Click `Commit`In the Commit window  to commit the changes
Click `Close` when the operation successfully completes to continue
Open another Browser and Type `http://www.facebook.com` and press `Enter`
MAKE SURE YOU TYPE HTTP && NOT HTTPS
You will see a `Your connection is not private` message
Click the `ADVANCED` Link
Then Click `Proceed to www.facebook.com(unsafe)`
```

:::note

You are seeing this error because the Firewall is intercepting traffic coming from the inside zone to the outside zone. The Firewall serves as a man-in-the-middle until authenticated.

:::


```md
You will see a web-form login
Type `lab-web` as the username
Then Type `Pal0Alt0!` as the Password
Then click the `login` button
You will see Facebook after successful Authentication to the Firewall as `lab-web`
```

:::info

In the logs you will see that the entries to `facebook-base` are associated with the `lab-web` user. You may need to manually refresh logs or check additional pages at the bottom of the page
:::








