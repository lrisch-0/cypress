*** Settings ***
Library           SeleniumLibrary
Test Setup        Open Page Automation Exercise
Test Teardown     Close Browser

*** Variables ***
${SERVER}         https://automationexercise.com/
${BROWSER}        Chrome

*** Test Cases ***
Open Page Automation Exercise
    Open Browser    ${SERVER}    ${BROWSER}
    Maximize Browser Window

Navigate to page 'Products'
     Click Element  xpath=//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a

Verify if search bar is visible
    Page Should Contain Element  xpath=//*[@id="search_product"] 

Write 'Men Tshirt'
    Input Text  xpath=//input[contains(@id="search_product")]  Men Tshirt

 Click on 'Search Button' 
    Click Button   //*[@id="submit_search"]/i

Verify 'Men Tshirt' is visible
    Page Should Contain  Men Tshirt

Add product to cart
    Click Element  xpath=/html/body/section[2]/div[1]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/a

Add a second item to the cart (your choice)
    Input Text  xpath=//input[contains(@id="search_product")]  Blue Top
    Click Button   //*[@id="submit_search"]/i
    Click Element  xpath=/html/body/section[2]/div[1]/div/div[2]/div/div[2]/div/div[1]/div[2]/div/a

Click on 'Cart' button
    Click Element  xpath=//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a

Verify that product are visible in cart
    Page Should Contain Element  xpath=//*[@id="product-2"]/td[2]/h4/a
    Page Should Contain Element  xpath=//*[@id="product-1"]/td[2]/h4/a

Verify that the sum of the product values is correct
    Click Button   //*[@id="do_action"]/div[1]/div/div/a
    ${price1} =    Get Text    //*[@id="product-2"]/td[5]/p
    ${price2} =    Get Text    //*[@id="product-1"]/td[5]/p
    ${total_price_text} =    Get Text    //*[@id="cart_info"]/table/tbody/tr[3]/td[4]/p
    ${total_price} =    Convert String To Number    ${total_price_text}
    ${calculated_total} =    Sum    ${price1}    ${price2}
    Should Be Equal To    ${calculated_total}    ${total_price}

Close Browser 
    Close Browser  



