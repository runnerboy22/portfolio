import audible

auth = audible.Authenticator.from_file("file.txt")

with audible.Client(auth=auth) as client:
    library = client.get(
        "1.0/library",
        num_results=1000,
        response_groups="product_desc",
        # response_groups=" product_attrs",
        sort_by="-PurchaseDate",
    )
    counter = 0
    for book in library["items"]:
        # pretty print the book
        counter += 1
        print(book["title"])
        print(counter)

        # print(book)
client = audible.Client(auth)

country_codes = ["de", "us", "ca", "uk", "au", "fr", "jp", "it", "in"]

# for country in country_codes:
#     client.switch_marketplace(country)
#     library = client.get("library", num_results=1000)
#     asins = [book["asin"] for book in library["items"]]
#     print(f"Country: {client.marketplace.upper()} | Number of books: {len(asins)}")
#     print(34 * "-")
