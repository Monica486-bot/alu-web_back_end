#!/usr/bin/env python3
"""
This module demonstrates an example coroutine that waits for a random delay.
"""


import asyncio
import random
from typing import Coroutine


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronously waits for a random delay between 0 and max_delay seconds.

    Args:
        max_delay (int): The maximum number of seconds to wait (default is 10).

    Returns:
        float: The number of seconds actually waited.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
