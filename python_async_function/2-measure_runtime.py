#!/usr/bin/env python3
"""
This module contains a function to measure the runtime of wait_n.
"""


import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n
        and returns the average time per coroutine.

    Args:
        n (int): Number of times to call wait_random.
        max_delay (int): Maximum delay in seconds for each wait_random call.

    Returns:
        float: Average execution time per coroutine.
    """
    start_time = time.time()  # Start the timer
    asyncio.run(wait_n(n, max_delay))  # Run the wait_n function asynchronously
    end_time = time.time()  # Stop the timer

    total_time = end_time - start_time  # Calculate total elapsed time
    return total_time / n  # Return the average time per coroutine
