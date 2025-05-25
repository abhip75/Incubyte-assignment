#### Fetaures Implemented ###

1). Returns 0 for empty string.

2). Supports one or two numbers separated by commas (e.g. "1,2").

3). Handle any amount of numbers.

4).Supports newlines (\n) as valid delimiters (e.g. "1\n2,3" returns 6).

5).Supports custom delimiters using //[delimiter]\n format (e.g. "//;\n1;2" returns 3).

6).Throws an exception if negative numbers are passed (e.g. "1,-2" throws "negative numbers not allowed: -2").

7). Shows all negative numbers in the error message (e.g. "-1,-3" → "negative numbers not allowed: -1,-3").
