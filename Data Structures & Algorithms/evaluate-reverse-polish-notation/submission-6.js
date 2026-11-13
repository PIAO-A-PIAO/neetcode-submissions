class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const operands = new Set(["+", "-", "*", "/"])
        for (const char of tokens) {
            if (!operands.has(char)) {
                stack.push(Number(char))
            } else {
                const right = stack.pop()
                const left = stack.pop()
                switch (char) {
                    case "+":
                        stack.push(left + right)
                        break;
                    case "-":
                        stack.push(left - right)
                        break;
                    case "*":
                        stack.push(left * right)
                        break;
                    case "/":
                        stack.push(Math.trunc(left / right))
                        break;
                }
            }
        }
        return stack.pop()
    }
}
