#!/usr/bin/env python3
"""
This module contains a coroutine to measure
    the total runtime of async_comprehension
    executed in parallel.
"""


import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel
    and measures the total runtime.

    Returns:
        float: The total runtime in seconds.
    """
    tasks = []
    start_time = time.time()
    for i in range(4):
        tasks.append(asyncio.create_task(async_comprehension()))
    await asyncio.gather(*tasks)
    end_time = time.time()
    return end_time - start_time
