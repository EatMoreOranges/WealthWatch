
# import pandas as pd
# import json




# data = pd.read_csv("statements/2024/2024-03.csv")

# data.head()


# json_data = []
# for index, row in data.iterrows():
#     row_dict = row.to_dict()
#     json_data.append(row_dict)


# with open("newJson.json", 'w') as json_file:
#     json.dump(json_data, json_file)
# json_data



# def row_to_json(row):
#     return row.to_dict()

# # Apply the function to each row of the DataFrame
# json_data = data.apply(lambda row: row_to_json(row), axis=1)

# # Write the JSON data to a file
# with open("newJson.json", 'w') as json_file:
#     json_data.to_json(json_file, orient='records', lines=True)