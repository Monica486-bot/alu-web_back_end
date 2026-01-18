#!/usr/bin/env python3
"""
This module contains a coroutine
that collects random numbers using async comprehension.
"""


import asyncio
from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collects 10 random numbers from async_generator
    using asynchronous comprehension.
    Returns:
        List[float]: A list of 10 random float numbers
        collected from async_generator.
    """
    return [num async for num in async_generator()]
