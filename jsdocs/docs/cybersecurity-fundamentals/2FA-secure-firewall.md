---
sidebar_position: 6
---

# 2FA to Secure the Firewall

## Two-Factor Authentication Using a Certificate
## Using Two-Factor Authentication to Secure the Firewall


```md title="Load Lab Configuration"
Click the Client tab to access the Client
Open up the browser and log into the Interface
Type `https://192.168.1.254` and press `Enter`
A screen with `Your connection is not private` will appear
click on the `ADVANCED` LINK
Then on the `Proceed to 192.168.1.254` (unsafe)
```

```md title="Log into the Firewall Interface"
username `admin`
password `Pal0Alt0!`
```

```md
In the web interface navigate to `Device` in the top selections
choose `Setup` from the selections in the far-right panel
And choose `Operations` from the selections above the `Configuration Management`
In the `Load Named Configuration` box choose `pan-cf-lab-05.xml` and click `OK`
Close the window with the message
Check the `Task Manager` in the bottom-right corner of the interface to verify the load
click `commit` and in the commit window click `commit` again 
let the commit opperation successfully complete then click `close`
```

```md title="Create Loacal User Account"
Navigate to `device` in the top selections in the interface
select Administrators from the far-right column
click add at the bottom ofthe window with the `admin` entry
In the Administrator window Type `lab-user` in the name field
then Type `Pal0Alt0` in the password field then click `OK`
```

```md title="Generate the Certificate"
Navigate to the Device choice from the top selections in the Interface
select `Certificates` from the choices in the far-left column
in the bottom-center of the interface click the `Generate` choice
In the Generate Certificate window Type `lab-local` in the name field
Then Type `192.168.1.254` in the Common name field
Next check the Certificate Authority checkbox
Finally click `Generate`
click `OK` in the successfully generated Generate Certificate window
Again click `Generate` at the bottom-center of the interface
In the Generate Certificate window Type `lab-user` in the name field
Then Type `lab-user` in the common name field 
Next select `lab-local` in the signed By dropdown
finally click the `Generate` button
and click continue in the successfully generated certificate window
```

:::note

In setting the Common Name as lab-user, this will later be used as an authentication field, to map to the local user account, lab-user. Notice, you are using the previous root CA certificate, lab-local, to sign this certificate.

:::

```md title="Create a Certificate Profile"
Navigate to `Device` from the top selections in the interface
Under `Certificate Management` from the choices in the far-left column choose `Certificate profile` 
Then click `Add` in the window on the bottom left
when the `Certification Profile` window appears Type `Cert-Local-Profile` in the name field
then select `Subject` in the `Username` field dropdown
next click the `Add` button
```

:::note

Notice the Username Field, when set to Subject, it will use “common- name” as the default. The Firewall will now use the “common-name” as the username. The lab-user certificate you generated earlier has a common-name of lab-user and will therefore use lab-user to authenticate the client machine.

:::

```md
in the `Certificate Profile` window select `lab-local` in the `CA Certificate` dropdown
then click the `OK` button
```

:::note

This maps back to the lab-local CA certificate you created earlier, and the Firewall will use this to verify the authenticity of the client supplied certificate, lab-user.

:::

```md
in the `Certificate Profile` window click the `OK` button
next Navigate to `Device` in the top selections in the interface
choose `Setup` from the choices in the far-left column
and choose `Management` above the `General Settings`
In the `Authentication Settings` box click the `Gear Icon`
In that `Authentication Settings` window select `Cert-Local-Profile` for the `Certification Profile` Dropdown
then click the `OK` button
```

```md title="Export Certificate && Commit"
Export the `lab-user` certificate that was generated on the firewall
Navigate to Device from the top selections in the interface
Under `Certificate Management` select `Certificates`
Select the `lab-user` certtificate
click on the `Export Certificate` button
In the Export Certificate - lab-user window
select `Encrypted Private Key and Certificate (PKCS12)` in the File Format dropdown
type `paloalto` for the `Passphrase` and confirm `Passphrase` fields
then click the `OK` button
```

:::note 

By using an Encrypted Private Key and Certificate, this creates an additional security measure, as the passphrase is required to install the certificate on a client machine.

:::

```md
In the `Save File` window pop-up, verify the name of `cert_lab-user.p12` is correct
in the `Name field`, verify the `.p12` file is being saved in the `Downloads` folder
click `save`
then click `commit` in the top-right of the interface
in the `Commit` window click `Commit` to commit the changes
When the `commit status` window reaches 99%, click `Close` to continue.
```

:::note

Notice the warning about the Web server being restarted, this is because of the authentication changes you made. You will need to click the Close button when it gets to 99%, since the web server is restarting, you will not see it get to 100%.

:::

```md
Click the `X` in the upper-right to close the Web Browser
```

```md title="Test Connectivity and Import Certificate on the Client"
Open the browser 
type `https://192.168.1.254` in the web address bar and press `Enter`
when you see `“Your connection is not private` 
click on the `ADVANCED` Link
click the `Proceed to 192.168.1.254 (unsafe)`
You will see a “400 Bad Request - No Required SSL certificate was sent” message.
Click the X in the upper-right to close Chromium
```

:::note

Notice you get a HTTP 400 Bad Request error. This is because the lab- user certificate is not installed on the Client machine. The Firewall administrators are not allowed to login unless they have the certificate installed and have an account and password. These two factors make up the Two-Factor Authentication

:::

```md
To install the lab-user certificate, open the browser
Click on the ellipsis icon and open the Settings 
Scroll down and click on the `Advanced` settings
then click on `Manage Certificates`.
In the Manage Certificates window, click Import.
In the Open File window, select `cert_lab-user.p12` and then click the `Open` button.
Enter the certificate password in the window 
password `paloalto` and click `OK`.
In the Manage Certificates window, expand the `org-lab-user` 
view and verify the `lab-user` certificate has been imported.
Click the X in the upper-right to close the browser
then open the browser from the taskbar
In the browser web bar Type `https://192.168.1.254` and press `Enter`.
Verify the `lab-user` certificate in the certificate window
then click `OK`.
Again you will see `Your connection is not private` message. 
Click on the `ADVANCED` link
Click on `Proceed to 192.168.1.254 (unsafe)`
In the Firewall login window.
Type `Pal0Alt0` for the Password field. 
Then, click the `Log In` button.
```

:::note

Notice that lab-user is pre-populated for the Username because the Certificate Profile you created earlier used the subject, common-name for the Username field.

:::

```md
On the Welcome window, click the Close button.
If you see the Telemetry Data Collection window, click the `Remind Me Later` button.
You are now at the Palo Alto Networks Web GUI
logged on as `lab-user`. Notice the `username` in the `lower-left`.
