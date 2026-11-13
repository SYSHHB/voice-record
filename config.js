/* ============================================================
   SYSHHB IT RECORDER - settings for YOUR organisation
   Edit this file on GitHub (pencil icon), then Commit changes.
   Nothing here is a password or secret.
   See SETUP-MICROSOFT.txt for where to find each value.
   ============================================================ */
window.MVR_CONFIG = {
  // From Microsoft Entra > App registrations > your app > Overview
  tenantId: "PASTE-DIRECTORY-TENANT-ID-HERE",
  clientId: "PASTE-APPLICATION-CLIENT-ID-HERE",

  // The OneDrive account that owns the data folder
  dataOwner: "it.helpdesk@syayasan.edu.bn",
  folderName: "MeetingReportData",

  // Filled in after first-time setup (the app shows you these two values)
  driveId: "",
  folderId: "",

  // The first sign-in by one of these people creates the user list and makes them Admin
  initialAdmins: ["it.helpdesk@syayasan.edu.bn"],

  // Only email addresses ending with this can be added as users ("" = any)
  allowedDomain: "syayasan.edu.bn",

  // How many days the app may be used offline before it needs to sign in again
  offlineDays: 14
};
