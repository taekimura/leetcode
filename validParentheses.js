var isValid = function(s) {
    const stack = [];
    let isValid = true;
    for(let i=0;i<s.length;i++){
        if(s[i] == ')'){
            if(stack.pop() !== '('){
                isValid = false;
                break;
            }
        }else if(s[i] == ']'){
            if(stack.pop() !== '['){
                isValid = false;
                break;
            }
        }else if(s[i] == '}'){
            if(stack.pop() !== '{'){
                isValid = false;
                break;
            }
        }else{
            stack.push(s[i]);
        }
    }
    return isValid && stack.length==0;
};
