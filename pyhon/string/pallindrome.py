def isPallindrome(s):
    cleaned=''.join(filter(str.isalnum,s)).lower()
    return cleaned==cleaned[::-1]


print(isPallindrome('wow'))
print(isPallindrome('racecar'))
print(isPallindrome('A man, a plan, a canal, Panama'))