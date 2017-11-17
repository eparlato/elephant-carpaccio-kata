# Elephant carpaccio - backlog

## Product

* 3 inputs

  * how many items
  * price per item
  * 2-letter state code

* output: total price

* goal: five states five discounts. 10 - 20 slices

## slice 0 - hello world

* tot_items : 0
* price_per_item: $0
* 2_letter_state: ""

* output

  * price: $0
  * tax rate: $0
  * discount: $0
  * total: $0

## slice 1

* items: 1
* price: $5
* state: ""

* output

  * price: $0
  * tax rate: $0
  * discount: $0
  * total: $5

## slice 2 - 2 items, total with no taxes nor discount

* items: 2
* price: $7
* state: ""

* output

  * price: $14
  * tax rate: $0
  * discount: $0
  * total: $14

## slice 3 - multiple items, total with no taxes nor discount

* items: 5
* price: $4
* state: ""

* output

  * price: $20
  * tax rate: $0
  * discount: $0
  * total: $20

## slice 4 - tax rate is always 6.85% (UT) when the state code is not empty

* items: 2
* price: $1000
* state: ""

* output

  * price: $2000
  * tax rate: $137 <-- hard coded value
  * discount: $0
  * total: $2137

## slice 5 - when we pass the state code NV, we get the related tax rate

* items: 2
* price: $1000
* state: NV

* output

  * price: $2000
  * tax rate: $160
  * discount: $0
  * total: $2160

## slice 6 - five states

* items: 2
* price: $2000
* state: CA

* output

  * price: $4000
  * tax rate: $330
  * discount: $0
  * total: $4330

## slice 7 - we always have $30 of discount

* items: 2
* price: $500
* state: CA

* output

  * price: $1000
  * discount: $30 <-- hard coded value
  * tax rate: $80,025
  * total: $1050,025

## slice 8 - when the price is >= $1000 we have 3% of discount

* items: 2
* price: $550
* state: TX

* output

  * price: $1100
  * discount: $33
  * tax: $66,6875
  * total: $1133,6875

## slice 9 - when the price is >= $5000, discount is not 3%, but 5%

* items: 5
* price: $1050
* state: AL

* output

  * price: $5250
  * discount: $262.5
  * tax: $199,5
  * total: $5187

## slice 10 - 5 states 5 discounts

* items: 10
* price: $60312
* state: NV

* output

  * price: $603120
  * discount: $90468
  * tax: $41012,16
  * total: $553664,16

  ## NOTES AND TODO

  * what if a parameter is missing (ex. tot_items === undefined)?
  * test for slice 3 adds no real value;
  * slice 4 should simply decrease $137 as tax value from total price. Another slice should make the equation 6.85% == $137;
  * slice 4 modified: if the state code is UT the tax value is 137, if the state code is empty, that value must be zero;
  * a slice is not always equal to a test. In a slice I implement a certain behaviour, I could need more tests to do it
   For example I want to introduce a fixed tax value of 137 whatever the state code is, but I can write my test saying that I get 137 ony if the state code is UT. That is because I know that I will get different tax values from different state codes.
     * or maybe I just need to think to a better slice. I'm not sure now, I probably need more feedback.
  * after slice 5 another slice should have the same state_code (NV) and the same tot_items (2) but different price_per_item, in order to have a different total_price. That would force me to write the code to calculate the tax value as a percentage of the total_price.
