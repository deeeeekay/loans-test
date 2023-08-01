# loans-test
This repo contains the automation tests for Loans App

<!-- GETTING STARTED -->
## Getting Started

## **Prerequisite** ##
* npm
  ```sh
  npm install npm@latest -g
  ```

## **Setup** ##

1. Clone the repo
   ```sh
   git clone https://github.com/deeeeekay/loans-test.git
   ```
2. Install Dependencies
   ```sh
   npm install
   npx playwright install --with-deps 
   ```
3. Copy **.env.tmpl** to **.env**
4. Update below variables in **.env** with your client-id and mobile-number
   ```js
   // mention your mobile number
   LOANS_TEST_MOBILE=""

   // mention your B2C client-code
   LOANS_B2C_CLIENT_ID="K52044025"

   ```
5. AutoForward OTP mails to Mailosaur. This is capture the OTP automatically via automation
   * Login to your registered email account 
   * Configure mail forwarding rule 
      * All OTP mails should be forwarded to **{{your-client-id}}@trunk-either@4ngiwnp2.mailosaur.net**
   * For assistance on confirmation code / verification code in above #2 step or any other queries, kindly contact @sundhara.s@angelbroking.com / @madhan.ganesh@angelbroking.com
   

## **Execution**
#### Set ENV variables
   ```sh
   scripts\bin\env
   ```

#### Run the suite
   ```sh
   npm run headless  #headless
       or
   npm run headed    #headed
   ```
#### View the report
   ```sh
   npm run report
   ```

