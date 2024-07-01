function convertToJSON() {
  const form = document.getElementById("dataForm");

  const formData = new FormData(form);

  const jsonObject = [
    {
      sourceTrackingId: formData.get("sourceTrackingId"),

      notificationName: formData.get("notificationName"),

      data: JSON.stringify({
        bank_id: formData.get("bank_id"),

        bank_user_id: formData.get("bank_user_id"),

        registrationCode: formData.get("registrationCode"),
      }),

      receiverDetails: JSON.stringify([
        {
          language: formData.get("language"),

          country: formData.get("country"),

          emailId: formData.get("emailId"),

          federatedUserId: formData.get("federatedUserId"),
        },
      ]),
    },
  ];

  const jsonString = JSON.stringify(jsonObject, null, 2);

  document.getElementById("jsonOutput").textContent = jsonString;
}
