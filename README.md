# SDK-react-native
This is a repo with a test app for testing the Qualtrics SDK in a react native project. Currently, project is only setup to test on iOS but is planned to have iOS added

To test iOS:

1. Go to App.js file and in function initMe() replace BRAND ID (line 59) with your brand id (portion before server in url, i.e. brandid.co1.qualtrics.com), replace PROJECT ID with your Project ID (more info here: https://www.qualtrics.com/support/website-app-feedback/common-use-cases/mobile-app-feedback-project/#InterceptID)
2. (Optional) If you are linking intercept to the XM Directory, add variable that contains value of Ext_Ref_Id of user in double quotes of line 61.
3. Open a command window and navigate into project folder
4. Run npx react-native start
5. Open a new Command window and navigate into project folder again
6. In new command window, run react-native run-ios
7. In simulator, you can now test intercept by clicking either button
