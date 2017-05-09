from checkio import api
from checkio.referees.io import CheckiOReferee
from checkio.referees.cover_codes import js_unwrap_args
from checkio.signals import ON_CONNECT


from tests import TESTS

cover = """def cover(func, data):
    return func(data[0], set(data[1]))
"""


api.add_listener(
    ON_CONNECT,
    CheckiOReferee(
        tests=TESTS,
        function_name={
            "python": "count_words",
            "js": "countWords",
        },
        cover_code={
            "python-27": cover,
            "python-3": cover,
            'js-node': js_unwrap_args,
        }
    ).on_ready)
