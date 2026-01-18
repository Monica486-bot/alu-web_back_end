#!/usr/bin/env python3
"""
This module provides a function that
    returns a tuple with a string
        and the square of a number.
"""


from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Return a tuple where the first element is the string `k`
    and the second element is
    the square of `v`, cast to a float.

    Args:
        k (str): The string key.
        v (Union[int, float]): An integer or floating-point
        to be squared.

    Returns:
        Tuple[str, float]: A tuple where
        the first element is `k`
        and the second element is
                the square of `v` as a float.
    """
    return (k, float(v ** 2))
