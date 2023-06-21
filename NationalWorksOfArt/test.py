import itertools

def get_combinations_indices(length, select):
    indices = list(range(length))
    combinations = list(itertools.combinations(indices, select))
    return combinations

length = 4
select = 3

combinations = get_combinations_indices(length, select)
print(combinations)



# 입력값 〉
# [1, 1, 2, 3, 3, 3], [1, 1, 2, 3, 3, 4]
# 기댓값 〉
# 3