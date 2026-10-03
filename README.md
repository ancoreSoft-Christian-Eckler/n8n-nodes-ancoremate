# n8n-nodes-ancoremate

n8n nodes by ancoreSoft for automating Qlik Cloud®.

Qlik®, Qlik Cloud® and Qlik Sense® are trademarks of QlikTech International AB. ancoreMate is not affiliated with or endorsed by Qlik.

## Installation

In n8n, open **Settings > Community nodes**, select **Install** and enter `n8n-nodes-ancoremate`.

## Credentials

1. Create a credential of type **ancoreMate OAuth2 API** and select **Connect my account**.
2. Sign in with your ancoreCloud account. The sign-in window shows the address of your n8n; continue only if it is yours.
3. The first time, enter your Qlik Cloud tenant, for example `company.eu.qlikcloud.com`, sign in at Qlik Cloud and approve the access for ancoreMate. Later sign-ins offer to continue with the connected tenant.

No client ID, client secret or API key has to be entered, neither in n8n nor in Qlik Cloud.

## Usage

Each node covers one area of Qlik Cloud. Choose the resource and the operation; lists of apps, spaces, sheets and other objects are loaded from your tenant. All actions run as the connected Qlik Cloud user and see only what this user may see.

- Files that a node returns (exports, reports, QVF files) are put into the binary field named in **Put Output File in Field** (default `data`), ready for nodes such as Gmail, Google Drive or Write Binary File.
- Files that a node sends (imports, uploads) are taken from the binary field named in **Input Binary Field**.
- Long-running operations such as reloads and exports wait for Qlik Cloud to finish and return the result.
- **Send Qlik Cloud Request** calls any Qlik Cloud REST endpoint below `/api/v1/` with the same sign-in.
- The trigger nodes register a webhook with ancoreMate when the workflow is activated and remove it when the workflow is deactivated.

## Example workflows

**Send a sheet as PDF every morning**

1. Schedule Trigger: every weekday at 7:00.
2. ancoreMate App Data, resource Report, operation **Export Sheet**: choose the app and the sheet, format PDF. The PDF is in the binary field `data`.
3. Gmail, operation **Send**: add the attachment `data`.

**Reload an app and report failures**

1. Schedule Trigger: every night.
2. ancoreMate Reloads, resource Reload, operation **Reload App and Wait**: choose the app.
3. If: `{{ $json.status }}` is not `SUCCEEDED`, send a message with Slack, Microsoft Teams or e-mail.

**Copy data to Google Sheets after each reload**

1. ancoreMate Reloads Trigger, event **When an app reload finishes**: choose the app.
2. ancoreMate App Data, resource Data, operation **Get Table Data**: choose the app and the table object.
3. Google Sheets, operation **Append or Update Row**.

**Store ancoreShare reports in a folder**

1. ancoreMate ancoreShare Reports Trigger, event **When an ancoreShare report is finished**: enter the ancoreMate key of the report button.
2. ancoreMate ancoreShare Reports, operation **Download Report Files**: one item per file.
3. Google Drive or Microsoft OneDrive, operation **Upload**.

## Documentation and support

- Documentation: https://docs.ancoresoft.com/
- Support: support@ancoresoft.com
- Qlik Cloud REST API: https://qlik.dev/apis/

## Nodes

### ancoreMate Apps

Manage Qlik Sense® apps in Qlik Cloud®: create, copy, publish, move, export and import apps (QVF), maintain media files, load scripts, data preparation scripts and performance evaluations. Triggers when an app is created, published, exported or its data model changes.

- **App: Change app owner** – Transfers an app to another user.
- **App: Copy app** – Creates a copy of an app, optionally with a new name or in another space.
- **App: Create app** – Creates an empty app.
- **Script: Create script** – Creates an empty script in a space or the personal space.
- **App: Delete app** – Deletes an app.
- **App media: Delete app media file** – Deletes a file from the media library of an app.
- **Script: Delete script** – Deletes a script.
- **App evaluation: Evaluate app performance** – Starts a performance evaluation of an app. Get the result with Get app evaluation.
- **App: Export app** – Exports an app as QVF file, optionally without data. Files up to 30 MB can be sent and files up to 50 MB returned.
- **App: Get app** – Returns the attributes of an app such as name, owner, space and last reload time.
- **App: Get app data lineage** – Returns the data sources the app loads from.
- **App: Get app data model** – Returns the tables and fields of the app data model with their sizes.
- **App evaluation: Get app evaluation** – Returns the result of a performance evaluation.
- **App media: Get app media file** – Downloads a file from the media library of an app, or the thumbnail of the app. Files up to 30 MB can be sent and files up to 50 MB returned.
- **App: List apps** – Lists the Qlik Sense apps of the tenant that the connected Qlik Cloud user has access to, sorted by name.
- **Load script: Get load script** – Returns the current load script of an app.
- **Load script: Get load script version** – Returns a saved version of the load script of an app.
- **Script: Get script** – Returns the current content of a script.
- **App: Import app** – Imports a QVF file as a new app into a space or the personal space. Files up to 30 MB can be sent and files up to 50 MB returned.
- **App evaluation: List app evaluations** – Lists the performance evaluations of an app.
- **App media: List app media files** – Lists the images and other files in the media library of an app.
- **Load script: List load script versions** – Lists the saved versions of the load script of an app.
- **Script: List scripts** – Lists the scripts, optionally filtered by name or space.
- **App: Move app to space** – Moves an app to another shared space.
- **App: Publish app** – Publishes an app to a managed space for the first time. Publishing the same app again creates a second published app; use Republish app to update a published app.
- **App: Republish app** – Replaces a published app in a managed space with the current version of the source app.
- **Load script: Set load script** – Replaces the load script of an app and keeps the previous script as a version.
- **App: Update app** – Changes the name or description of an app.
- **Script: Update script** – Replaces the content of a script and keeps the previous content as a version.
- **App media: Upload app media file** – Uploads an image or other file into the media library of an app; an existing file is replaced. Files up to 30 MB can be sent and files up to 50 MB returned.
- **Load script: Validate load script** – Checks a load script for basic errors such as unknown statements, without saving or running it; errors in the details of a statement are found only when the app is reloaded.
- **Connection: Get Qlik connection** – Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user.
- **Request: Send Qlik Cloud request** – Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own.
- **App: List app choices** – Lists the apps the connected Qlik Cloud user can open, for selecting an app in other actions.
- **Space: List space choices** – Lists the spaces the connected Qlik Cloud user can see, for selecting a space in other actions.
- **Trigger: Delete trigger subscription** – Turns a trigger off and deletes its webhook in Qlik Cloud.
- **App: When an app is created** – Starts when an app is created.
- **App: When the data model of an app changes** – Starts when the data model of an app is updated, for example by a reload with changed tables.
- **App: When an app is exported** – Starts when an app is exported.
- **App: When an app is published** – Starts when an app is published to a managed space.

### ancoreMate Reloads

Reload Qlik Sense® apps in Qlik Cloud® and wait for the result, follow and cancel reloads, read reload logs and manage reload schedules. Triggers when an app reload finishes, also of reload tasks, filtered by app and result.

- **Connection: Get Qlik connection** – Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user.
- **Request: Send Qlik Cloud request** – Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own.
- **Reload: Cancel reload** – Cancels a reload that is queued or running.
- **Reload task: Create reload task** – Creates a reload schedule for an app.
- **Reload task: Delete reload task** – Deletes a reload schedule.
- **Reload: Get reload** – Returns a reload with its status, duration and log excerpt.
- **Reload: Get reload group job** – Returns several reloads when all are finished; used while waiting for reloads.
- **Reload: Get reload job** – Returns a reload when it is finished; used while waiting for a reload.
- **Reload log: Get reload log** – Returns the complete log of a reload as text.
- **Reload task: Get reload task** – Returns a reload schedule with its next run.
- **Reload log: List reload logs** – Lists the stored reload logs of an app.
- **Reload task: List reload task runs** – Lists the runs of a reload task, newest first, with status and short log.
- **Reload task: List reload tasks** – Lists the reload schedules, optionally of one app, with their next run.
- **Reload: List reloads** – Lists the reloads of an app, newest first.
- **Reload: Reload app** – Starts a reload of an app and returns the reload with its ID and status.
- **Reload: Reload app and wait** – Reloads an app and waits until the reload is finished; the result tells whether it succeeded.
- **Reload task: Start reload task** – Runs an enabled reload task now, outside its schedule.
- **Reload task: Update reload task** – Changes the schedule of a reload task; values left empty stay as they are.
- **Reload: Wait for reloads** – Waits until the given reloads, for example started in parallel, are finished.
- **App: List app choices** – Lists the apps the connected Qlik Cloud user can open, for selecting an app in other actions.
- **Space: List space choices** – Lists the spaces the connected Qlik Cloud user can see, for selecting a space in other actions.
- **Trigger: Delete trigger subscription** – Turns a trigger off and deletes its webhook in Qlik Cloud.
- **Reload: When an app reload finishes** – Starts when a reload of an app finishes, successfully or with an error.

### ancoreMate App Data

Work with the content of Qlik Sense® apps in Qlik Cloud®: read field values, expressions and table data with selections or bookmarks, maintain sheets, bookmarks, master items and variables, and export sheets, charts and data as PDF, PowerPoint, image or Excel.

- **Bookmark: Create bookmark** – Saves selections as a bookmark, optionally published.
- **Master dimension: Create or update master dimension** – Creates a master dimension for a field, or updates the dimension when a dimension ID is given.
- **Master measure: Create or update master measure** – Creates a master measure, or updates the measure when a measure ID is given.
- **Variable: Create or update variable** – Creates a variable or changes its definition.
- **Report: Create report from template** – Creates a report from a report template, for example Excel or PixelPerfect, in the format of the template or as PDF.
- **Bookmark: Delete bookmark** – Deletes a bookmark.
- **Master dimension: Delete master dimension** – Deletes a master dimension.
- **Master measure: Delete master measure** – Deletes a master measure.
- **Sheet: Delete sheet** – Deletes a sheet with its objects.
- **Variable: Delete variable** – Deletes a variable.
- **Sheet: Duplicate sheet** – Copies a sheet with all its objects within the app.
- **Data: Evaluate expression** – Calculates an expression such as Sum(Sales) with the given selections.
- **Report: Export chart** – Exports a chart as PNG image or PDF file, with optional selections.
- **Report: Export chart data** – Exports the data of a table or chart as Excel file, with optional selections.
- **Report: Export sheet** – Exports a sheet as PDF or PowerPoint file, with optional selections.
- **Field: List fields** – Lists the fields of the data model of a Qlik Sense app with their number of distinct values and tags.
- **Master dimension: Get master dimension** – Returns the properties of a master dimension.
- **Master measure: Get master measure** – Returns the properties of a master measure.
- **Data: Get measure value** – Calculates a master measure with the given selections.
- **Object: Get object properties** – Returns all properties of an object such as a chart, as the Qlik associative engine stores them.
- **Report: Get report job** – Returns a report when it is ready; used while waiting for a report.
- **Data: Get table data** – Returns the rows of a table or chart of the app with the given selections.
- **Data: Get table data for fields** – Builds a table from dimensions and measures and returns its rows with the given selections.
- **Variable: Get variable** – Returns a variable with its definition and current value.
- **Bookmark: List bookmarks** – Lists the bookmarks of an app.
- **Object: List table and chart objects** – Lists the tables and charts of all sheets, for selecting an object.
- **Master dimension: List master dimension values** – Lists the values of a master dimension, optionally with selections.
- **Master dimension: List master dimensions** – Lists the master dimensions of an app.
- **Field: List field values** – Lists the values of a field, optionally only those possible with the given selections.
- **Object: List master visualizations** – Lists the master visualizations of an app.
- **Master measure: List master measures** – Lists the master measures of an app with their expressions.
- **Report: List report templates** – Lists the report templates, for example Excel or PixelPerfect, optionally of one app.
- **Sheet: List sheet objects** – Lists the charts and tables on a sheet.
- **Sheet: List sheets** – Lists the sheets of an app with their publishing state.
- **Object: List stories** – Lists the stories of an app.
- **Variable: List variables** – Lists the variables of an app with their definitions.
- **Bookmark: Publish bookmark** – Publishes a bookmark for the other users of the app.
- **Sheet: Publish sheet** – Publishes a sheet so that other users of the app can see it.
- **Field: Set always one selected value** – Switches the setting that a field always has exactly one selected value.
- **Bookmark: Unpublish bookmark** – Makes a published bookmark private again.
- **Sheet: Unpublish sheet** – Makes a published sheet private again.
- **Bookmark: Update bookmark** – Changes the title or description of a bookmark.
- **Connection: Get Qlik connection** – Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user.
- **Request: Send Qlik Cloud request** – Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own.
- **App: List app choices** – Lists the apps the connected Qlik Cloud user can open, for selecting an app in other actions.
- **Space: List space choices** – Lists the spaces the connected Qlik Cloud user can see, for selecting a space in other actions.
- **Trigger: Delete trigger subscription** – Turns a trigger off and deletes its webhook in Qlik Cloud.

### ancoreMate Spaces and Access

Control access to Qlik Cloud®: read the tenant, create spaces, add members and change their space roles, share space content, and read users and groups.

- **Space member: Add space member** – Assigns a user or group to a space with the given roles.
- **Space member: Add space member roles** – Adds roles to a user or group in a space and keeps the existing roles; adds the member when needed.
- **Space: Create or update space** – Creates a space, or updates the name and description of an existing space when a space ID is given.
- **Space share: Create space share** – Shares an item of a space with a user or group.
- **Space: Delete space** – Deletes a space. The space must be empty.
- **Space share: Delete space share** – Removes a share from a space.
- **User: Get current user** – Returns the Qlik Cloud user ancoreMate is connected with.
- **Group: Get group** – Returns a group of the tenant.
- **Space: Get space** – Returns a space with its settings.
- **Space member: Get space member** – Returns one assignment of a user or group to a space.
- **Space share: Get space share** – Returns one share of a space.
- **Tenant: Get tenant** – Returns the name, hostnames and status of the tenant.
- **User: Get user** – Returns a user of the tenant.
- **Group: List groups** – Lists the groups of the tenant. Use the filter to search, for example name eq "Finance".
- **Space member: List space members** – Lists the users and groups assigned to a space with their roles.
- **Space share: List space shares** – Lists the items shared directly from a space.
- **Space: List space types** – Lists the types of spaces available in the tenant.
- **Space: List spaces** – Lists the spaces the connected Qlik Cloud user can see.
- **User: List users** – Lists the users of the tenant. Use the filter to search, for example name co "anna".
- **Space member: Remove space member** – Removes a user or group from a space.
- **Space member: Remove space member roles** – Removes roles from a user or group in a space; without remaining roles the member is removed from the space.
- **Space member: Set space member** – Gives a user or group exactly the given roles in a space and adds the member when needed.
- **Space member: Update space member** – Replaces the roles of a user or group in a space.
- **Space share: Update space share** – Changes the roles of a share.
- **Connection: Get Qlik connection** – Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user.
- **Request: Send Qlik Cloud request** – Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own.
- **App: List app choices** – Lists the apps the connected Qlik Cloud user can open, for selecting an app in other actions.
- **Space: List space choices** – Lists the spaces the connected Qlik Cloud user can see, for selecting a space in other actions.
- **Trigger: Delete trigger subscription** – Turns a trigger off and deletes its webhook in Qlik Cloud.

### ancoreMate Content

Work with files and data in Qlik Cloud®: find items, upload, copy, move and delete data files and folders, manage data connections and read the changes of write tables (change stores).

- **Connection: Get Qlik connection** – Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user.
- **Request: Send Qlik Cloud request** – Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own.
- **Data connection: Copy data connection** – Creates a copy of a data connection, optionally in another space.
- **Data file: Copy data file** – Copies a data file under a new name, optionally into another space.
- **Data connection: Create data connection** – Creates a data connection in a space.
- **Data file: Create data folder** – Creates a folder for data files in a space or the personal space.
- **Data connection: Delete data connection** – Deletes a data connection.
- **Data file: Delete data file** – Deletes a data file.
- **Data file: Delete data files** – Deletes several data files at once.
- **Change store: Get change store** – Returns a change store.
- **Data connection: Get data connection** – Returns a data connection.
- **Data file: Get data file** – Returns the details of a data file.
- **Item: Get item** – Returns an item of the tenant.
- **Change store: List change store columns** – Lists the editable columns of a change store.
- **Change store: List change store table** – Lists the edits of a change store as table rows.
- **Change store: List change stores** – Lists the change stores that keep the edits of write tables.
- **Change store: List current changes** – Lists the current edits in a change store.
- **Data connection: List data connections** – Lists the data connections the connected user can use.
- **Data file: List data file connections** – Lists the data file connections, one per space with data files.
- **Data file: List data files** – Lists the data files in a space or in the personal space.
- **Item: List items** – Lists the items of the tenant such as apps, data files, notes and automations. Filter by type, name or space.
- **Data connection: Update data connection** – Replaces the settings of a data connection.
- **Data file: Upload data file** – Uploads a data file, for example CSV or Excel, into a space or the personal space; with a data file ID the existing file is replaced. Files up to 30 MB can be sent and files up to 50 MB returned.
- **App: List app choices** – Lists the apps the connected Qlik Cloud user can open, for selecting an app in other actions.
- **Space: List space choices** – Lists the spaces the connected Qlik Cloud user can see, for selecting a space in other actions.
- **Trigger: Delete trigger subscription** – Turns a trigger off and deletes its webhook in Qlik Cloud.

### ancoreMate Catalog

Maintain the data catalog of Qlik Cloud®: data stores, data assets and datasets, and business glossaries with categories and terms, including import and export.

- **Glossary term: Change glossary term status** – Sets the status of a glossary term, for example verified.
- **Data asset: Create data asset** – Creates a data asset in a data store.
- **Data store: Create data store** – Creates a data store in the catalog.
- **Dataset: Create dataset** – Creates a dataset in a data asset.
- **Glossary: Create glossary** – Creates a business glossary.
- **Glossary category: Create glossary category** – Creates a category in a glossary.
- **Glossary term: Create glossary term** – Creates a term in a glossary.
- **Data asset: Delete data asset** – Deletes a data asset.
- **Dataset: Delete dataset** – Deletes a dataset.
- **Glossary: Delete glossary** – Deletes a glossary with its categories and terms.
- **Glossary category: Delete glossary category** – Deletes a category of a glossary.
- **Glossary term: Delete glossary term** – Deletes a term of a glossary.
- **Glossary: Export glossary** – Exports a glossary with its categories and terms as JSON.
- **Data asset: Get data asset** – Returns a data asset.
- **Data store: Get data store** – Returns a data store.
- **Dataset: Get dataset** – Returns a dataset with its schema.
- **Glossary: Get glossary** – Returns a business glossary.
- **Glossary category: Get glossary category** – Returns a category of a glossary.
- **Glossary term: Get glossary term** – Returns a term of a glossary.
- **Glossary: Import glossary** – Creates a glossary from an exported glossary.
- **Data asset: List data assets** – Lists the data assets of a data store.
- **Data store: List data stores** – Lists the data stores of the catalog.
- **Dataset: List datasets** – Lists the datasets of a data asset.
- **Glossary: List glossaries** – Lists the business glossaries.
- **Glossary category: List glossary categories** – Lists the categories of a glossary.
- **Glossary term: List glossary terms** – Lists the terms of a glossary.
- **Data asset: Update data asset** – Replaces the attributes of a data asset.
- **Data store: Update data store** – Replaces the attributes of a data store.
- **Dataset: Update dataset** – Replaces the attributes of a dataset.
- **Glossary: Update glossary** – Replaces the name, description and settings of a glossary.
- **Glossary category: Update glossary category** – Replaces the name and description of a glossary category.
- **Glossary term: Update glossary term** – Replaces the definition and attributes of a glossary term.
- **Connection: Get Qlik connection** – Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user.
- **Request: Send Qlik Cloud request** – Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own.
- **App: List app choices** – Lists the apps the connected Qlik Cloud user can open, for selecting an app in other actions.
- **Space: List space choices** – Lists the spaces the connected Qlik Cloud user can see, for selecting a space in other actions.
- **Trigger: Delete trigger subscription** – Turns a trigger off and deletes its webhook in Qlik Cloud.

### ancoreMate Automations

Run and manage the automations of Qlik Cloud®: run, stop and retry automations, follow their runs, copy, enable or move automations and maintain their connections. Triggers when an automation changes or a run starts, ends or fails.

- **Automation: Copy automation** – Creates a copy of an automation.
- **Automation: Create automation** – Creates an automation in Qlik Automate.
- **Automation connection: Create automation connection** – Creates a connection for automations.
- **Automation: Delete automation** – Deletes an automation.
- **Automation connection: Delete automation connection** – Deletes an automation connection.
- **Automation: Disable automation** – Disables an automation so that it no longer runs.
- **Automation: Enable automation** – Enables an automation so that it runs on its triggers again.
- **Automation run: Export automation run** – Returns a link to the detailed log of a run.
- **Automation: Get automation** – Returns an automation of Qlik Automate.
- **Automation connection: Get automation connection** – Returns an automation connection.
- **Automation run: Get automation run** – Returns a run of an automation with its status.
- **Automation connection: List automation connections** – Lists the connections that automations use to reach other services.
- **Automation run: List automation runs** – Lists the runs of an automation, newest first.
- **Automation: List automations** – Lists the automations of Qlik Automate the connected user can see.
- **Automation connection: Move automation connection to space** – Moves an automation connection to another space.
- **Automation: Move automation to space** – Moves an automation to another space.
- **Automation run: Retry automation run** – Runs a failed run of an automation again.
- **Automation run: Run automation** – Starts a run of an automation.
- **Automation run: Stop automation run** – Stops a running run of an automation.
- **Automation: Update automation** – Replaces the definition of an automation.
- **Automation connection: Update automation connection** – Changes the name or parameters of an automation connection.
- **Connection: Get Qlik connection** – Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user.
- **Request: Send Qlik Cloud request** – Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own.
- **App: List app choices** – Lists the apps the connected Qlik Cloud user can open, for selecting an app in other actions.
- **Space: List space choices** – Lists the spaces the connected Qlik Cloud user can see, for selecting a space in other actions.
- **Trigger: Delete trigger subscription** – Turns a trigger off and deletes its webhook in Qlik Cloud.
- **Automation: When an automation is created** – Starts when an automation is created.
- **Automation: When an automation is deleted** – Starts when an automation is deleted.
- **Automation run: When an automation run ends** – Starts when a run of an automation ends.
- **Automation run: When an automation run fails** – Starts when a run of an automation fails.
- **Automation run: When an automation run starts** – Starts when a run of an automation starts.
- **Automation: When an automation is updated** – Starts when an automation is changed.

### ancoreMate ancoreShare Reports

Run ancoreShare reports, download the report files and read the report usage. Triggers when an ancoreShare report button has finished a report.

- **Report file: Download report file** – Downloads one file of a finished report from its link; links are valid for 12 hours.
- **Report file: Download report files** – Downloads all files of a finished report at once, for example to attach them to one mail.
- **Usage: Get report usage** – Returns the number of report runs per month, of all runs by button and by interface, for the account or one app, report or Qlik user.
- **Usage: List automated report runs** – Lists the report runs started through the ancoreShare interface (not by the button) with result and error, to find failed automated runs.
- **Report: List ancoreShare reports** – Lists the ancoreShare report buttons of an app with title, export type and tags.
- **Report: Run ancoreShare report** – Starts an ancoreShare report; ancoreShare queues it and sends the files to the targets of the report button, for example the ancoreMate event.
- **Report: When an ancoreShare report is finished** – Starts when a report button with ancoreMate event enabled has finished a report, run by a user or through the interface.
- **Connection: Get Qlik connection** – Returns whether ancoreMate is connected to a Qlik Cloud tenant, and to which tenant and Qlik user.
- **Request: Send Qlik Cloud request** – Calls any REST API of your Qlik Cloud tenant below /api/v1/ with the connected user's rights, for operations that have no action of their own.
- **App: List app choices** – Lists the apps the connected Qlik Cloud user can open, for selecting an app in other actions.
- **Space: List space choices** – Lists the spaces the connected Qlik Cloud user can see, for selecting a space in other actions.
- **Trigger: Delete trigger subscription** – Turns a trigger off and deletes its webhook in Qlik Cloud.

## Requirements

- An ancoreCloud account with an ancoreMate subscription. See https://ancorecloud.com/ for details.
- A Qlik Cloud user with access to the content you want to automate.
- n8n reachable over HTTPS (or on localhost), because the sign-in returns to n8n's OAuth callback.
