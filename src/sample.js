module.exports = {
	output: `export TEST_URL="https://next.ft.com"; nht nightwatch -c nightwatch.json -e ie8,ie9 test/browser/automation/core.js --suiteRetries 3
Started child process for: ie8 environment 
Started child process for: ie9 environment 

  >> ie8 environment finished.  


  >> ie9 environment finished.  

 ie8   [Core] Test Suite
 ie8   =================
 ie8   
 ie8   Results for:  Test: Show core experience
 ie8   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie8   Test APIs flag is off
 ie8   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie8   ✔ Customer service message OK
 ie8   ✔ Form not visible OK
 ie8   OK. 2 assertions passed. (18.382s)
 ie8   
 ie9   [Core] Test Suite
 ie9   =================
 ie9   
 ie9   Results for:  Test: Show core experience
 ie9   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie9   Test APIs flag is off
 ie9   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie9   ✔ Customer service message OK
 ie9   ✔ Form not visible OK
 ie9   OK. 2 assertions passed. (23.363s)
 ie9   
export TEST_URL="https://next.ft.com"; nht nightwatch -c nightwatch.json -e chromeLatest,firefoxLatest,ie11,edge test/browser/automation/regression/form-basics.js --suiteRetries 3
Started child process for: chromeLatest environment 
Started child process for: firefoxLatest environment 
Started child process for: ie11 environment 
Started child process for: edge environment 

  >> chromeLatest environment finished.  


  >> firefoxLatest environment finished.  


  >> ie11 environment finished.  


  >> edge environment finished.  

 chromeLatest   [Form Basics] Test Suite
 chromeLatest   ========================
 chromeLatest   
 chromeLatest   Results for:  Test: "Show password" tick works
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8749
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Password Tick present
 chromeLatest   ✔ Passed [equal]: password == password
 chromeLatest   ✔ Passed [equal]: text == text
 chromeLatest   OK. 4 assertions passed. (11.779s)
 chromeLatest   
 chromeLatest   Results for:  Test: "Email exists" notification works
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Testing if element <#emailExistsStatusBox> is hidden.
 chromeLatest   null
 chromeLatest   ✔ Testing if element <#emailExistsStatusBox> is hidden.
 chromeLatest   null
 chromeLatest   ✔ "Email exists" status box was shown
 chromeLatest   ✔ Login form loaded OK
 chromeLatest   OK. 5 assertions passed. (18.706s)
 chromeLatest   
 chromeLatest   OK. 9 total assertions passed. (30.665s)
 firefoxLatest   [Form Basics] Test Suite
 firefoxLatest   ========================
 firefoxLatest   
 firefoxLatest   Results for:  Test: "Show password" tick works
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5821
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Password Tick present
 firefoxLatest   ✔ Passed [equal]: password == password
 firefoxLatest   ✔ Passed [equal]: text == text
 firefoxLatest   OK. 4 assertions passed. (17.848s)
 firefoxLatest   
 firefoxLatest   Results for:  Test: "Email exists" notification works
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Testing if element <#emailExistsStatusBox> is hidden.
 firefoxLatest   ✔ Testing if element <#emailExistsStatusBox> is hidden.
 firefoxLatest   ✔ "Email exists" status box was shown
 firefoxLatest   ✔ Login form loaded OK
 firefoxLatest   OK. 5 assertions passed. (21.644s)
 firefoxLatest   
 firefoxLatest   OK. 9 total assertions passed. (39.687s)
 ie11   [Form Basics] Test Suite
 ie11   ========================
 ie11   
 ie11   Results for:  Test: "Show password" tick works
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 ie11   8 cookies
 ie11   page length: 5821
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Password Tick present
 ie11   ✔ Passed [equal]: password == password
 ie11   ✔ Passed [equal]: text == text
 ie11   OK. 4 assertions passed. (22.13s)
 ie11   Results for:  Test: "Email exists" notification works
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Testing if element <#emailExistsStatusBox> is hidden.
 ie11   ✔ Testing if element <#emailExistsStatusBox> is hidden.
 ie11   ✔ "Email exists" status box was shown
 ie11   ✔ Login form loaded OK
 ie11   OK. 5 assertions passed. (24.374s)
 ie11   
 ie11   OK. 9 total assertions passed. (46.695s)
 edge   [Form Basics] Test Suite
 edge   ========================
 edge   
 edge   Results for:  Test: "Show password" tick works
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is off
 edge   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6433
 edge   ✔ Signup form loaded OK
 edge   ✔ Password Tick present
 edge   ✔ Passed [equal]: password == password
 edge   ✔ Passed [equal]: text == text
 edge   OK. 4 assertions passed. (21.118s)
 edge   
 edge   Results for:  Test: "Email exists" notification works
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is off
 edge   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   ✔ Signup form loaded OK
 edge   ✔ Testing if element <#emailExistsStatusBox> is hidden.
 edge   ✔ Testing if element <#emailExistsStatusBox> is hidden.
 edge   ✔ "Email exists" status box was shown
 edge   ✔ Login form loaded OK
 edge   OK. 5 assertions passed. (27.818s)
 edge   
 edge   OK. 9 total assertions passed. (49.134s)
export TEST_URL="https://next.ft.com"; nht nightwatch -c nightwatch.json -e chromeLatest,firefoxLatest,ie11,edge test/browser/automation/regression/dynamic-copy.js --suiteRetries 3
Started child process for: chromeLatest environment 
Started child process for: firefoxLatest environment 
Started child process for: ie11 environment 
Started child process for: edge environment 

  >> chromeLatest environment finished.  


  >> firefoxLatest environment finished.  


  >> ie11 environment finished.  


  >> edge environment finished.  

 chromeLatest   [Dynamic Copy] Test Suite
 chromeLatest   =========================
 chromeLatest   
 chromeLatest   Results for:  Test: T&Cs copy changes when changing terms
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8749
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Expected element <.tc_term> text to contain: "year"
 chromeLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 chromeLatest   ✔ Expected element <.tc_term> text to contain: "month"
 chromeLatest   ✔ Tab [data-trackable="subscription-yearly"] selected
 chromeLatest   ✔ Expected element <.tc_term> text to contain: "year"
 chromeLatest   OK. 6 assertions passed. (15.954s)
 chromeLatest   
 chromeLatest   Results for:  Test: T&Cs for trial
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8729
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Expected element <.tc_term> text to contain: "year"
 chromeLatest   OK. 2 assertions passed. (9.789s)
 chromeLatest   Results for:  Test: T&C reflects url "term" param on page load
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=monthly&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 chromeLatest   page length: 8750
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Expected element <.tc_term> text to contain: "month"
 chromeLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 chromeLatest   ✔ Expected element <.tc_term> text to contain: "month"
 chromeLatest   ✔ Tab [data-trackable="subscription-yearly"] selected
 chromeLatest   ✔ Expected element <.tc_term> text to contain: "year"
 chromeLatest   OK. 6 assertions passed. (16.524s)
 chromeLatest   Results for:  Test: Premium product description
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8749
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Expected element <.su-header__description> text to match: "/unlimited|Unlimited/"
 chromeLatest   ✔ Expected element <.su-header__description> text to contain: "ePaper"
 chromeLatest   OK. 3 assertions passed. (10.603s)
 chromeLatest   Results for:  Test: Standard product description
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=c8ad55e6-ba74-fea0-f9da-a4546ae2ee23&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=c8ad55e6-ba74-fea0-f9da-a4546ae2ee23&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8678
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Expected element <.su-header__description> text to not match: "/unlimited|Unlimited/"
 chromeLatest   ✔ Expected element <.su-header__description> text to not contain: "ePaper"
 chromeLatest   OK. 3 assertions passed. (10.474s)
 chromeLatest   Results for:  Test: Trial product description
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 chromeLatest   page length: 8729
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Expected element <.su-header__description> text to match: "/unlimited|Unlimited/"
 chromeLatest   ✔ Expected element <.su-header__description> text to contain: "ePaper"
 chromeLatest   ✔ Expected element <.su-header__description> text to contain: "4 weeks"
 chromeLatest   OK. 4 assertions passed. (12.227s)
 chromeLatest   Results for:  Test: Show errors when submitting empty form
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is off
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8749
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Email error OK
 chromeLatest   ✔ Password error OK
 chromeLatest   ✔ First name error OK
 chromeLatest   ✔ Last name error OK
 chromeLatest   ✔ Phone number error OK
 chromeLatest   ✔ Industry error OK
 chromeLatest   ✔ Responsibility error OK
 chromeLatest   ✔ Position error OK
 chromeLatest   ✔ CC type error OK
 chromeLatest   ✔ T&Cs error OK
 chromeLatest   OK. 11 assertions passed. (19.465s)
 chromeLatest   
 chromeLatest   OK. 35 total assertions passed. (1m 35s)
 firefoxLatest   [Dynamic Copy] Test Suite
 firefoxLatest   =========================
 firefoxLatest   
 firefoxLatest   Results for:  Test: T&Cs copy changes when changing terms
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5821
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Expected element <.tc_term> text to contain: "year"
 firefoxLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 firefoxLatest   ✔ Expected element <.tc_term> text to contain: "month"
 firefoxLatest   ✔ Tab [data-trackable="subscription-yearly"] selected
 firefoxLatest   ✔ Expected element <.tc_term> text to contain: "year"
 firefoxLatest   OK. 6 assertions passed. (21.612s)
 firefoxLatest   
 firefoxLatest   Results for:  Test: T&Cs for trial
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5801
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Expected element <.tc_term> text to contain: "year"
 firefoxLatest   OK. 2 assertions passed. (15.483s)
 firefoxLatest   Results for:  Test: T&C reflects url "term" param on page load
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=monthly&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 firefoxLatest   page length: 5822
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Expected element <.tc_term> text to contain: "month"
 firefoxLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 firefoxLatest   ✔ Expected element <.tc_term> text to contain: "month"
 firefoxLatest   ✔ Tab [data-trackable="subscription-yearly"] selected
 firefoxLatest   ✔ Expected element <.tc_term> text to contain: "year"
 firefoxLatest   OK. 6 assertions passed. (22.26s)
 firefoxLatest   
 firefoxLatest   Results for:  Test: Premium product description
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 firefoxLatest   page length: 5821
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Expected element <.su-header__description> text to match: "/unlimited|Unlimited/"
 firefoxLatest   ✔ Expected element <.su-header__description> text to contain: "ePaper"
 firefoxLatest   OK. 3 assertions passed. (15.859s)
 firefoxLatest   
 firefoxLatest   Results for:  Test: Standard product description
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=c8ad55e6-ba74-fea0-f9da-a4546ae2ee23&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=c8ad55e6-ba74-fea0-f9da-a4546ae2ee23&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5750
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Expected element <.su-header__description> text to not match: "/unlimited|Unlimited/"
 firefoxLatest   ✔ Expected element <.su-header__description> text to not contain: "ePaper"
 firefoxLatest   OK. 3 assertions passed. (15.946s)
 firefoxLatest   Results for:  Test: Trial product description
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5801
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Expected element <.su-header__description> text to match: "/unlimited|Unlimited/"
 firefoxLatest   ✔ Expected element <.su-header__description> text to contain: "ePaper"
 firefoxLatest   ✔ Expected element <.su-header__description> text to contain: "4 weeks"
 firefoxLatest   OK. 4 assertions passed. (16.11s)
 firefoxLatest   Results for:  Test: Show errors when submitting empty form
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is off
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5821
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Email error OK
 firefoxLatest   ✔ Password error OK
 firefoxLatest   ✔ First name error OK
 firefoxLatest   ✔ Last name error OK
 firefoxLatest   ✔ Phone number error OK
 firefoxLatest   ✔ Industry error OK
 firefoxLatest   ✔ Responsibility error OK
 firefoxLatest   ✔ Position error OK
 firefoxLatest   ✔ CC type error OK
 firefoxLatest   ✔ T&Cs error OK
 firefoxLatest   OK. 11 assertions passed. (23.467s)
 firefoxLatest   
 firefoxLatest   OK. 35 total assertions passed. (2m 10s)
 ie11   [Dynamic Copy] Test Suite
 ie11   =========================
 ie11   
 ie11   Results for:  Test: T&Cs copy changes when changing terms
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 ie11   8 cookies
 ie11   page length: 5821
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Expected element <.tc_term> text to contain: "year"
 ie11   ✔ Tab [data-trackable="subscription-monthly"] selected
 ie11   ✔ Expected element <.tc_term> text to contain: "month"
 ie11   ✔ Tab [data-trackable="subscription-yearly"] selected
 ie11   ✔ Expected element <.tc_term> text to contain: "year"
 ie11   OK. 6 assertions passed. (23.459s)
 ie11   Results for:  Test: T&Cs for trial
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 ie11   page length: 5801
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Expected element <.tc_term> text to contain: "year"
 ie11   OK. 2 assertions passed. (14.601s)
 ie11   Results for:  Test: T&C reflects url "term" param on page load
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=monthly&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 ie11   8 cookies
 ie11   page length: 5822
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Expected element <.tc_term> text to contain: "month"
 ie11   ✔ Tab [data-trackable="subscription-monthly"] selected
 ie11   ✔ Expected element <.tc_term> text to contain: "month"
 ie11   ✔ Tab [data-trackable="subscription-yearly"] selected
 ie11   ✔ Expected element <.tc_term> text to contain: "year"
 ie11   OK. 6 assertions passed. (20.999s)
 ie11   Results for:  Test: Premium product description
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 ie11   page length: 5821
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Expected element <.su-header__description> text to match: "/unlimited|Unlimited/"
 ie11   ✔ Expected element <.su-header__description> text to contain: "ePaper"
 ie11   OK. 3 assertions passed. (16.498s)
 ie11   Results for:  Test: Standard product description
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=c8ad55e6-ba74-fea0-f9da-a4546ae2ee23&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=c8ad55e6-ba74-fea0-f9da-a4546ae2ee23&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 ie11   8 cookies
 ie11   page length: 5750
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Expected element <.su-header__description> text to not match: "/unlimited|Unlimited/"
 ie11   ✔ Expected element <.su-header__description> text to not contain: "ePaper"
 ie11   OK. 3 assertions passed. (16.627s)
 ie11   Results for:  Test: Trial product description
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 ie11   page length: 5801
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Expected element <.su-header__description> text to match: "/unlimited|Unlimited/"
 ie11   ✔ Expected element <.su-header__description> text to contain: "ePaper"
 ie11   ✔ Expected element <.su-header__description> text to contain: "4 weeks"
 ie11   OK. 4 assertions passed. (16.182s)
 ie11   Results for:  Test: Show errors when submitting empty form
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is off
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 ie11   page length: 5821
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Email error OK
 ie11   ✔ Password error OK
 ie11   ✔ First name error OK
 ie11   ✔ Last name error OK
 ie11   ✔ Phone number error OK
 ie11   ✔ Industry error OK
 ie11   ✔ Responsibility error OK
 ie11   ✔ Position error OK
 ie11   ✔ CC type error OK
 ie11   ✔ T&Cs error OK
 ie11   OK. 11 assertions passed. (25.099s)
 ie11   
 ie11   OK. 35 total assertions passed. (2m 13s)
 edge   [Dynamic Copy] Test Suite
 edge   =========================
 edge   
 edge   Results for:  Test: T&Cs copy changes when changing terms
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is off
 edge   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6433
 edge   ✔ Signup form loaded OK
 edge   ✔ Expected element <.tc_term> text to contain: "year"
 edge   ✔ Tab [data-trackable="subscription-monthly"] selected
 edge   ✔ Expected element <.tc_term> text to contain: "month"
 edge   ✔ Tab [data-trackable="subscription-yearly"] selected
 edge   ✔ Expected element <.tc_term> text to contain: "year"
 edge   OK. 6 assertions passed. (24.087s)
 edge   
 edge   Results for:  Test: T&Cs for trial
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is off
 edge   BUILT URL: https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
7 cookies
 edge   page length: 6399
 edge   ✔ Signup form loaded OK
 edge   ✔ Expected element <.tc_term> text to contain: "year"
 edge   OK. 2 assertions passed. (17.446s)

Results for:  Test: T&C reflects url "term" param on page load
https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
Test APIs flag is off
BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=monthly&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
7 cookies
 edge   page length: 6434
 edge   ✔ Signup form loaded OK
 edge   ✔ Expected element <.tc_term> text to contain: "month"
 edge   ✔ Tab [data-trackable="subscription-monthly"] selected
 edge   ✔ Expected element <.tc_term> text to contain: "month"
 edge   ✔ Tab [data-trackable="subscription-yearly"] selected
 edge   ✔ Expected element <.tc_term> text to contain: "year"
 edge   OK. 6 assertions passed. (24.567s)
 edge   
 edge   Results for:  Test: Premium product description
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is off
 edge   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
7 cookies
 edge   page length: 6433
 edge   ✔ Signup form loaded OK
 edge   ✔ Expected element <.su-header__description> text to match: "/unlimited|Unlimited/"
 edge   ✔ Expected element <.su-header__description> text to contain: "ePaper"
 edge   OK. 3 assertions passed. (18.363s)
 edge   
 edge   Results for:  Test: Standard product description
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is off
 edge   BUILT URL: https://next.ft.com/signup/?offerId=c8ad55e6-ba74-fea0-f9da-a4546ae2ee23&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=c8ad55e6-ba74-fea0-f9da-a4546ae2ee23&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
7 cookies
 edge   page length: 6362
 edge   ✔ Signup form loaded OK
 edge   ✔ Expected element <.su-header__description> text to not match: "/unlimited|Unlimited/"
 edge   ✔ Expected element <.su-header__description> text to not contain: "ePaper"
 edge   OK. 3 assertions passed. (18.382s)
 edge   Results for:  Test: Trial product description
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is off
 edge   BUILT URL: https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=41218b9e-c8ae-c934-43ad-71b13fcb4465&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6399
 edge   ✔ Signup form loaded OK
 edge   ✔ Expected element <.su-header__description> text to match: "/unlimited|Unlimited/"
 edge   ✔ Expected element <.su-header__description> text to contain: "ePaper"
 edge   ✔ Expected element <.su-header__description> text to contain: "4 weeks"
 edge   OK. 4 assertions passed. (19.412s)
 edge   Results for:  Test: Show errors when submitting empty form
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is off
 edge   BUILT URL: https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=713f1e28-0bc5-8261-f1e6-eebab6f7600e&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6433
 edge   ✔ Signup form loaded OK
 edge   ✔ Email error OK
 edge   ✔ Password error OK
 edge   ✔ First name error OK
 edge   ✔ Last name error OK
 edge   ✔ Phone number error OK
 edge   ✔ Industry error OK
 edge   ✔ Responsibility error OK
 edge   ✔ Position error OK
 edge   ✔ CC type error OK
 edge   ✔ T&Cs error OK
 edge   OK. 11 assertions passed. (25.489s)
 edge   
 edge   OK. 35 total assertions passed. (2m 27s)
export TEST_URL="https://next.ft.com"; nht nightwatch -c nightwatch.json -e chromeLatest,firefoxLatest,ie11,edge test/browser/automation/regression/gateways.js --suiteRetries 3
Started child process for: chromeLatest environment 
Started child process for: firefoxLatest environment 
Started child process for: ie11 environment 
Started child process for: edge environment 

  >> chromeLatest environment finished.  


  >> edge environment finished.  


  >> firefoxLatest environment finished.  


  >> ie11 environment finished.  

 chromeLatest   The time is: Wed May 11 2016 15:36:02 GMT+0100 (BST), using Test APIs? on
 chromeLatest   [Gateways] Test Suite
 chromeLatest   =====================
 chromeLatest   
 chromeLatest   Results for:  Test: Premium | Visa | UK | Monthly
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is on
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 chromeLatest   page length: 8749
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Showing Premium header OK
 chromeLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 chromeLatest   ✔ Zuora iFrame loaded OK
 chromeLatest   ✔ Thank you page loaded OK
 chromeLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 chromeLatest   ✔ Expected element <#name> text to contain: "Smoke"
 chromeLatest   ✔ Expected element <#name> text to contain: "Test"
 chromeLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 chromeLatest   ✔ Expected element <#price> text to contain: "40.96"
 chromeLatest   OK. 10 assertions passed. (55.752s)
 chromeLatest   
 chromeLatest   Results for:  Test: Premium | Visa | UK | Annual
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is on
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8749
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Showing Premium header OK
 chromeLatest   ✔ Tab [data-trackable="subscription-yearly"] selected
 chromeLatest   ✔ Zuora iFrame loaded OK
 chromeLatest   ✔ Thank you page loaded OK
 chromeLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 chromeLatest   ✔ Expected element <#name> text to contain: "Smoke"
 chromeLatest   ✔ Expected element <#name> text to contain: "Test"
 chromeLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 chromeLatest   ✔ Expected element <#price> text to contain: "371.80"
 chromeLatest   OK. 10 assertions passed. (46.682s)

Results for:  Test: Premium | Visa | USA | Monthly
https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
Test APIs flag is on
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=USA&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=USA
 chromeLatest   8 cookies
 chromeLatest   page length: 8755
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Showing Premium header OK
 chromeLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 chromeLatest   ✔ Saw State and Zip fields OK
 chromeLatest   ✔ Zuora iFrame loaded OK
 chromeLatest   ✔ Thank you page loaded OK
 chromeLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 chromeLatest   ✔ Expected element <#name> text to contain: "Smoke"
 chromeLatest   ✔ Expected element <#name> text to contain: "Test"
 chromeLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 chromeLatest   ✔ Expected element <#price> text to contain: "51.52"
 chromeLatest   OK. 11 assertions passed. (48.549s)
 chromeLatest   Results for:  Test: Premium | Amex | UK | Monthly
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is on
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 chromeLatest   page length: 8749
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Showing Premium header OK
 chromeLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 chromeLatest   ✔ Zuora iFrame loaded OK
 chromeLatest   ✔ Thank you page loaded OK
 chromeLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 chromeLatest   ✔ Expected element <#name> text to contain: "Smoke"
 chromeLatest   ✔ Expected element <#name> text to contain: "Test"
 chromeLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 chromeLatest   ✔ Expected element <#price> text to contain: "40.96"
 chromeLatest   OK. 10 assertions passed. (47.721s)
 chromeLatest   Results for:  Test: Standard | Visa | UK | Monthly
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is on
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=6c7b7f36-0b91-b33b-2257-71d09919ddc4&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=6c7b7f36-0b91-b33b-2257-71d09919ddc4&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8678
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Showing Standard header OK
 chromeLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 chromeLatest   ✔ Zuora iFrame loaded OK
 chromeLatest   ✔ Thank you page loaded OK
 chromeLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 chromeLatest   ✔ Expected element <#name> text to contain: "Smoke"
 chromeLatest   ✔ Expected element <#name> text to contain: "Test"
 chromeLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 chromeLatest   ✔ Expected element <#price> text to contain: "29.00"
 chromeLatest   OK. 10 assertions passed. (45.211s)
 chromeLatest   Results for:  Test: Trial | Visa | UK | Monthly
 chromeLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 chromeLatest   Test APIs flag is on
 chromeLatest   BUILT URL: https://next.ft.com/signup/?offerId=607d2649-3dab-9ef9-8bdd-b0963715890a&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 chromeLatest   https://next.ft.com/signup/?offerId=607d2649-3dab-9ef9-8bdd-b0963715890a&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 chromeLatest   8 cookies
 chromeLatest   page length: 8731
 chromeLatest   ✔ Signup form loaded OK
 chromeLatest   ✔ Showing Trial header OK
 chromeLatest   ✔ Tab [data-trackable="subscription-trial"] selected
 chromeLatest   ✔ Zuora iFrame loaded OK
 chromeLatest   ✔ Thank you page loaded OK
 chromeLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 chromeLatest   ✔ Expected element <#name> text to contain: "Smoke"
 chromeLatest   ✔ Expected element <#name> text to contain: "Test"
 chromeLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 chromeLatest   ✔ Expected element <#price> text to contain: "1.00"
 chromeLatest   OK. 10 assertions passed. (50.21s)
 chromeLatest   
 chromeLatest   OK. 61 total assertions passed. (4m 54s)
 firefoxLatest   The time is: Wed May 11 2016 15:36:02 GMT+0100 (BST), using Test APIs? on
 firefoxLatest   [Gateways] Test Suite
 firefoxLatest   =====================
 firefoxLatest   
 firefoxLatest   Results for:  Test: Premium | Visa | UK | Monthly
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is on
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5821
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Showing Premium header OK
 firefoxLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 firefoxLatest   ✔ Zuora iFrame loaded OK
 firefoxLatest   ✔ Thank you page loaded OK
 firefoxLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Smoke"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Test"
 firefoxLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 firefoxLatest   ✔ Expected element <#price> text to contain: "40.96"
 firefoxLatest   OK. 10 assertions passed. (55.212s)
 firefoxLatest   
 firefoxLatest   Results for:  Test: Premium | Visa | UK | Annual
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is on
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 firefoxLatest   page length: 5821
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Showing Premium header OK
 firefoxLatest   ✔ Tab [data-trackable="subscription-yearly"] selected
 firefoxLatest   ✔ Zuora iFrame loaded OK
 firefoxLatest   ✔ Thank you page loaded OK
 firefoxLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Smoke"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Test"
 firefoxLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 firefoxLatest   ✔ Expected element <#price> text to contain: "371.80"
 firefoxLatest   OK. 10 assertions passed. (51.093s)
 firefoxLatest   
 firefoxLatest   Results for:  Test: Premium | Visa | USA | Monthly
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is on
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=USA&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=USA
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5827
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Showing Premium header OK
 firefoxLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 firefoxLatest   ✔ Saw State and Zip fields OK
 firefoxLatest   ✔ Zuora iFrame loaded OK
 firefoxLatest   ✔ Thank you page loaded OK
 firefoxLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Smoke"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Test"
 firefoxLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 firefoxLatest   ✔ Expected element <#price> text to contain: "51.52"
 firefoxLatest   OK. 11 assertions passed. (55.739s)
 firefoxLatest   Results for:  Test: Premium | Amex | UK | Monthly
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is on
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 firefoxLatest   page length: 5821
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Showing Premium header OK
 firefoxLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 firefoxLatest   ✔ Zuora iFrame loaded OK
 firefoxLatest   ✔ Thank you page loaded OK
 firefoxLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Smoke"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Test"
 firefoxLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 firefoxLatest   ✔ Expected element <#price> text to contain: "40.96"
 firefoxLatest   OK. 10 assertions passed. (54.205s)
 firefoxLatest   Results for:  Test: Standard | Visa | UK | Monthly
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is on
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=6c7b7f36-0b91-b33b-2257-71d09919ddc4&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=6c7b7f36-0b91-b33b-2257-71d09919ddc4&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 firefoxLatest   8 cookies
 firefoxLatest   page length: 5750
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Showing Standard header OK
 firefoxLatest   ✔ Tab [data-trackable="subscription-monthly"] selected
 firefoxLatest   ✔ Zuora iFrame loaded OK
 firefoxLatest   ✔ Thank you page loaded OK
 firefoxLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Smoke"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Test"
 firefoxLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 firefoxLatest   ✔ Expected element <#price> text to contain: "29.00"
 firefoxLatest   OK. 10 assertions passed. (51.777s)
 firefoxLatest   
 firefoxLatest   Results for:  Test: Trial | Visa | UK | Monthly
 firefoxLatest   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 firefoxLatest   Test APIs flag is on
 firefoxLatest   BUILT URL: https://next.ft.com/signup/?offerId=607d2649-3dab-9ef9-8bdd-b0963715890a&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 firefoxLatest   https://next.ft.com/signup/?offerId=607d2649-3dab-9ef9-8bdd-b0963715890a&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 firefoxLatest   page length: 5803
 firefoxLatest   ✔ Signup form loaded OK
 firefoxLatest   ✔ Showing Trial header OK
 firefoxLatest   ✔ Tab [data-trackable="subscription-trial"] selected
 firefoxLatest   ✔ Zuora iFrame loaded OK
 firefoxLatest   ✔ Thank you page loaded OK
 firefoxLatest   ✔ Expected element <#email> text to contain: "@ftqa.org"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Smoke"
 firefoxLatest   ✔ Expected element <#name> text to contain: "Test"
 firefoxLatest   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 firefoxLatest   ✔ Expected element <#price> text to contain: "1.00"
 firefoxLatest   OK. 10 assertions passed. (54.605s)
 firefoxLatest   
 firefoxLatest   OK. 61 total assertions passed. (5m 22s)
 ie11   The time is: Wed May 11 2016 15:36:02 GMT+0100 (BST), using Test APIs? on
 ie11   [Gateways] Test Suite
 ie11   =====================
 ie11   
 ie11   Results for:  Test: Premium | Visa | UK | Monthly
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is on
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 ie11   8 cookies
 ie11   page length: 5821
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Showing Premium header OK
 ie11   ✔ Tab [data-trackable="subscription-monthly"] selected
 ie11   ✔ Zuora iFrame loaded OK
 ie11   ✔ Thank you page loaded OK
 ie11   ✔ Expected element <#email> text to contain: "@ftqa.org"
 ie11   ✔ Expected element <#name> text to contain: "Smoke"
 ie11   ✔ Expected element <#name> text to contain: "Test"
 ie11   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 ie11   ✔ Expected element <#price> text to contain: "40.96"
 ie11   OK. 10 assertions passed. (1m 1s / 61567ms)
 ie11   
 ie11   Results for:  Test: Premium | Visa | UK | Annual
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is on
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 ie11   8 cookies
 ie11   page length: 5821
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Showing Premium header OK
 ie11   ✔ Tab [data-trackable="subscription-yearly"] selected
 ie11   ✔ Zuora iFrame loaded OK
 ie11   ✔ Thank you page loaded OK
 ie11   ✔ Expected element <#email> text to contain: "@ftqa.org"
 ie11   ✔ Expected element <#name> text to contain: "Smoke"
 ie11   ✔ Expected element <#name> text to contain: "Test"
 ie11   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 ie11   ✔ Expected element <#price> text to contain: "371.80"
 ie11   OK. 10 assertions passed. (57.638s)
 ie11   
 ie11   Results for:  Test: Premium | Visa | USA | Monthly
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is on
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=USA&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=USA
8 cookies
 ie11   page length: 5827
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Showing Premium header OK
 ie11   ✔ Tab [data-trackable="subscription-monthly"] selected
 ie11   ✔ Saw State and Zip fields OK
 ie11   ✔ Zuora iFrame loaded OK
 ie11   ✔ Thank you page loaded OK
 ie11   ✔ Expected element <#email> text to contain: "@ftqa.org"
 ie11   ✔ Expected element <#name> text to contain: "Smoke"
 ie11   ✔ Expected element <#name> text to contain: "Test"
 ie11   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 ie11   ✔ Expected element <#price> text to contain: "51.52"
 ie11   OK. 11 assertions passed. (54.675s)
 ie11   
 ie11   Results for:  Test: Premium | Amex | UK | Monthly
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is on
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 ie11   page length: 5821
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Showing Premium header OK
 ie11   ✔ Tab [data-trackable="subscription-monthly"] selected
 ie11   ✔ Zuora iFrame loaded OK
 ie11   ✔ Thank you page loaded OK
 ie11   ✔ Expected element <#email> text to contain: "@ftqa.org"
 ie11   ✔ Expected element <#name> text to contain: "Smoke"
 ie11   ✔ Expected element <#name> text to contain: "Test"
 ie11   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 ie11   ✔ Expected element <#price> text to contain: "40.96"
 ie11   OK. 10 assertions passed. (53.287s)
 ie11   Results for:  Test: Standard | Visa | UK | Monthly
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is on
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=6c7b7f36-0b91-b33b-2257-71d09919ddc4&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=6c7b7f36-0b91-b33b-2257-71d09919ddc4&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
8 cookies
 ie11   page length: 5750
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Showing Standard header OK
 ie11   ✔ Tab [data-trackable="subscription-monthly"] selected
 ie11   ✔ Zuora iFrame loaded OK
 ie11   ✔ Thank you page loaded OK
 ie11   ✔ Expected element <#email> text to contain: "@ftqa.org"
 ie11   ✔ Expected element <#name> text to contain: "Smoke"
 ie11   ✔ Expected element <#name> text to contain: "Test"
 ie11   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 ie11   ✔ Expected element <#price> text to contain: "29.00"
 ie11   OK. 10 assertions passed. (51.634s)
 ie11   Results for:  Test: Trial | Visa | UK | Monthly
 ie11   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 ie11   Test APIs flag is on
 ie11   BUILT URL: https://next.ft.com/signup/?offerId=607d2649-3dab-9ef9-8bdd-b0963715890a&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 ie11   https://next.ft.com/signup/?offerId=607d2649-3dab-9ef9-8bdd-b0963715890a&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 ie11   8 cookies
 ie11   page length: 5803
 ie11   ✔ Signup form loaded OK
 ie11   ✔ Showing Trial header OK
 ie11   ✔ Tab [data-trackable="subscription-trial"] selected
 ie11   ✔ Zuora iFrame loaded OK
 ie11   ✔ Thank you page loaded OK
 ie11   ✔ Expected element <#email> text to contain: "@ftqa.org"
 ie11   ✔ Expected element <#name> text to contain: "Smoke"
 ie11   ✔ Expected element <#name> text to contain: "Test"
 ie11   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 ie11   ✔ Expected element <#price> text to contain: "1.00"
 ie11   OK. 10 assertions passed. (54.388s)
 ie11   
 ie11   OK. 61 total assertions passed. (5m 33s)
 edge   The time is: Wed May 11 2016 15:36:02 GMT+0100 (BST), using Test APIs? on
 edge   [Gateways] Test Suite
 edge   =====================
 edge   
 edge   Results for:  Test: Premium | Visa | UK | Monthly
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is on
 edge   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6433
 edge   ✔ Signup form loaded OK
 edge   ✔ Showing Premium header OK
 edge   ✔ Tab [data-trackable="subscription-monthly"] selected
 edge   ✔ Zuora iFrame loaded OK
 edge   ✔ Thank you page loaded OK
 edge   ✔ Expected element <#email> text to contain: "@ftqa.org"
 edge   ✔ Expected element <#name> text to contain: "Smoke"
 edge   ✔ Expected element <#name> text to contain: "Test"
 edge   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 edge   ✔ Expected element <#price> text to contain: "40.96"
 edge   OK. 10 assertions passed. (55.441s)
 edge   
 edge   Results for:  Test: Premium | Visa | UK | Annual
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is on
 edge   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6433
 edge   ✔ Signup form loaded OK
 edge   ✔ Showing Premium header OK
 edge   ✔ Tab [data-trackable="subscription-yearly"] selected
 edge   ✔ Zuora iFrame loaded OK
 edge   ✔ Thank you page loaded OK
 edge   ✔ Expected element <#email> text to contain: "@ftqa.org"
 edge   ✔ Expected element <#name> text to contain: "Smoke"
 edge   ✔ Expected element <#name> text to contain: "Test"
 edge   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 edge   ✔ Expected element <#price> text to contain: "371.80"
 edge   OK. 10 assertions passed. (53.612s)
 edge   Results for:  Test: Premium | Visa | USA | Monthly
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is on
 edge   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=USA&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=USA
 edge   7 cookies
 edge   page length: 6439
 edge   ✔ Signup form loaded OK
 edge   ✔ Showing Premium header OK
 edge   ✔ Tab [data-trackable="subscription-monthly"] selected
 edge   ✔ Saw State and Zip fields OK
 edge   ✔ Zuora iFrame loaded OK
 edge   ✔ Thank you page loaded OK
 edge   ✔ Expected element <#email> text to contain: "@ftqa.org"
 edge   ✔ Expected element <#name> text to contain: "Smoke"
 edge   ✔ Expected element <#name> text to contain: "Test"
 edge   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 edge   ✔ Expected element <#price> text to contain: "51.52"
 edge   OK. 11 assertions passed. (53.649s)
 edge   
 edge   Results for:  Test: Premium | Amex | UK | Monthly
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is on
 edge   BUILT URL: https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=f5203c83-e824-523d-5ef2-766c162f8eba&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6433
 edge   ✔ Signup form loaded OK
 edge   ✔ Showing Premium header OK
 edge   ✔ Tab [data-trackable="subscription-monthly"] selected
 edge   ✔ Zuora iFrame loaded OK
 edge   ✔ Thank you page loaded OK
 edge   ✔ Expected element <#email> text to contain: "@ftqa.org"
 edge   ✔ Expected element <#name> text to contain: "Smoke"
 edge   ✔ Expected element <#name> text to contain: "Test"
 edge   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 edge   ✔ Expected element <#price> text to contain: "40.96"
 edge   OK. 10 assertions passed. (53.219s)
 edge   Results for:  Test: Standard | Visa | UK | Monthly
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is on
 edge   BUILT URL: https://next.ft.com/signup/?offerId=6c7b7f36-0b91-b33b-2257-71d09919ddc4&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=6c7b7f36-0b91-b33b-2257-71d09919ddc4&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6362
 edge   ✔ Signup form loaded OK
 edge   ✔ Showing Standard header OK
 edge   ✔ Tab [data-trackable="subscription-monthly"] selected
 edge   ✔ Zuora iFrame loaded OK
 edge   ✔ Thank you page loaded OK
 edge   ✔ Expected element <#email> text to contain: "@ftqa.org"
 edge   ✔ Expected element <#name> text to contain: "Smoke"
 edge   ✔ Expected element <#name> text to contain: "Test"
 edge   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 edge   ✔ Expected element <#price> text to contain: "29.00"
 edge   OK. 10 assertions passed. (51.641s)
 edge   
 edge   Results for:  Test: Trial | Visa | UK | Monthly
 edge   https://next.ft.com/__gtg?&backend=undefined.herokuapp.com
 edge   Test APIs flag is on
 edge   BUILT URL: https://next.ft.com/signup/?offerId=607d2649-3dab-9ef9-8bdd-b0963715890a&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR&backend=undefined.herokuapp.com
 edge   https://next.ft.com/signup/?offerId=607d2649-3dab-9ef9-8bdd-b0963715890a&term=annual&segID=400864&segmentID=1ee18acf-9ef8-4f19-57a0-df24a75a0411&countryCode=GBR
 edge   7 cookies
 edge   page length: 6401
 edge   ✔ Signup form loaded OK
 edge   ✔ Showing Trial header OK
 edge   ✔ Tab [data-trackable="subscription-trial"] selected
 edge   ✔ Zuora iFrame loaded OK
 edge   ✔ Thank you page loaded OK
 edge   ✔ Expected element <#email> text to contain: "@ftqa.org"
 edge   ✔ Expected element <#name> text to contain: "Smoke"
 edge   ✔ Expected element <#name> text to contain: "Test"
 edge   ✔ Expected element <#date> text to match: "/(\d){1,2}\/(\d){1,2}\/(\d){2}/"
 edge   ✔ Expected element <#price> text to contain: "1.00"
 edge   OK. 10 assertions passed. (53.008s)
 edge   
 edge   OK. 61 total assertions passed. (5m 20s)`
};