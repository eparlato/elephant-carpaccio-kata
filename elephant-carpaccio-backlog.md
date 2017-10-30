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

price: $0
tax rate: $0:
discount: $0
total: $0

## slice 1

* items: 1
* price: $5
* state: ""

* output

price: $0
tax rate: $0:
discount: $0
total: $5

## slice 2

* items: 2
* price: $7
* state: ""

* output

price: $0
tax rate: $0:
discount: $0
total: $21

## slice 3

* items: 2
* price: $1000
* state: ""

* output

price: $2000
tax rate: $137
discount: $0
total: $2137

## slice 4

* items: 2
* price: $1000
* state: NV

* output

price: $2000
tax rate: $160
discount: $0
total: $2160

## slice 5 - all tax rates

* items: 2
* price: $2000
* state: CA

* output

price: $4000
tax rate: $330
discount: $0
total: $4330