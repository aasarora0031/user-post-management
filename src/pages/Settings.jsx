import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { t, i18n } = useTranslation();

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedNotifications = localStorage.getItem("notificationsEnabled");
    const savedLanguage = localStorage.getItem("language");

    if (savedNotifications !== null) {
      setNotificationsEnabled(JSON.parse(savedNotifications));
    }

    if (savedLanguage) {
      setLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    localStorage.setItem(
      "notificationsEnabled",
      JSON.stringify(notificationsEnabled)
    );
  }, [notificationsEnabled]);

  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <div>
      <h1>{t("settings")}</h1>

      <label style={{ display: "block", marginTop: "20px" }}>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={(e) => setNotificationsEnabled(e.target.checked)}
        />{" "}
        {t("notifications")}
      </label>

      <p>
        {t("notifications")} :{" "}
        <strong>{notificationsEnabled ? t("on") : t("off")}</strong>
      </p>

      <div style={{ marginTop: "30px" }}>
        <label>
          {t("language")} :{" "}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
          </select>
        </label>
      </div>
    </div>
  );
}
