#!/usr/bin/env python3
"""
This module provides a function to sum a list of floating-point numbers.
"""


from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Return the sum of a list of floating-point numbers.

    Args:
        input_list (List[float]): A list of floats to be summed.

    Returns:
        float: The sum of all the floats in the list.
    """
    return sum(input_list)
