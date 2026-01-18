#!/usr/bin/env python3
"""
This module provides a function that returns a multiplier function.
"""


from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Return a function that multiplies a float by the given multiplier.

    Args:
        multiplier (float): The multiplier to be applied.

    Returns:
        Callable[[float], float]:
            A function that takes a float and returns the result
                of multiplying it by the multiplier.
    """
    def multiplier_function(value: float) -> float:
        return value * multiplier

    return multiplier_function
