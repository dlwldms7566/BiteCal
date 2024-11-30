Maintenance and Troubleshooting
===============================

This guide provides instructions for routine maintenance of **BiteCal** and solutions to common issues that may arise during its use.

---

## **1. Routine Maintenance**

To ensure the smooth operation of BiteCal, follow these maintenance practices:

### **1.1 Update Dependencies**
Regularly update the application's dependencies to benefit from the latest features and security patches. Use the following command to update:
```bash
pip install --upgrade -r requirements.txt

### **1.2 Database Cleanup**
Periodically clean up the database to remove outdated or unnecessary data. If using SQLite, run the following commands:
DELETE FROM logs WHERE date < 'YYYY-MM-DD';
VACUUM;

### **1.3 Backup**
Ensure regular backups of your database and configuration files. For SQLite, create a backup with:
```bash
cp bitecal.db backup_bitecal_YYYYMMDD.db

## **2. Troubleshooting**

### **2.1 Common Issues and Fixes**
Issue: Application Fails to Start
-Cause: Missing or incorrect environment variables.
-Solution: Ensure all required environment variables (SECRET_KEY, DATABASE_URL, FLASK_ENV) are set correctly. You can verify with:
```bash
echo $SECRET_KEY
Issue: Database Connection Error
-Cause: Incorrect DATABASE_URL or inaccessible database server.
-Solution: Verify the DATABASE_URL in your environment variables. Test connectivity to the database using appropriate tools (e.g., sqlite3 for SQLite or psql for PostgreSQL).
Issue: Unexpected Behavior in Debug Mode
-Cause: Running the app with FLASK_ENV=development in a production environment.
-Solution: Set FLASK_ENV=production before deployment.

### **2.2 Logs for Debugging**
Review application logs to identify the root cause of issues. Logs are saved in the logs/ directory by default. Example command to view logs:
```bash
tail -f logs/app.log

## **3. Contact Support**
If the above steps do not resolve your issue, please contact the BiteCal support team with the following details:
-Error message or log snippet.
-Steps to reproduce the issue.
-Your system and application version.