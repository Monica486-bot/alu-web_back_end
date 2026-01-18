#!/usr/bin/env python3
"""
This module provides a function to sum a list of integers
    and floating-point numbers.
"""


from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Return the sum of a list containing both integers
        and floating-point numbers.

    Args:
        mxd_lst (List[Union[int, float]]): A list of integers
            and floats to be summed.

    Returns:
        float: The sum of all the integers
            and floats in the list.
    """
    return sum(mxd_lst)
