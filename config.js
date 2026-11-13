/* ============================================================
   SYSHHB IT RECORDER - settings for YOUR organisation
   Edit this file on GitHub (pencil icon), then Commit changes.
   Nothing here is a password or secret.
   See SETUP-MICROSOFT.txt for where to find each value.
   ============================================================ */
window.MVR_CONFIG = {
  // From Microsoft Entra > App registrations > your app > Overview
  tenantId: "syayasan.edu.bn",   // your Microsoft 365 domain (works the same as the Directory (tenant) ID)
  clientId: "d3ab4c65-3ba1-4c04-98fd-66a0c7730cdf",

  // The OneDrive account that owns the data folder
  dataOwner: "it.helpdesk@syayasan.edu.bn",
  folderName: "MeetingReportData",

  // Filled in after first-time setup (the app shows you these two values)
  driveId: "b!R_lPWUdjfEuqzVrRupLxSE47Uqs5BWdEtWJhDv2jn1e619-HvmPEQrnstLIZc1T6",
  folderId: "01O26XY4WLBP3NTAIYAVE32C6P5LC3JDPE",

  // The first sign-in by one of these people creates the user list and makes them Admin
  initialAdmins: ["it.helpdesk@syayasan.edu.bn", "zulfa.zaini@syayasan.edu.bn"],

  // Only email addresses ending with this can be added as users ("" = any)
  allowedDomain: "syayasan.edu.bn",

  // How many days the app may be used offline before it needs to sign in again
  offlineDays: 14
};
