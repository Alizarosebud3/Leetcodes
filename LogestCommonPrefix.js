/*
    14. Longest Common Prefix
    
        Write a function to find the longest common prefix string amongst an array of strings.
        If there is no common prefix, return an empty string "".
        
        Example 1:
        Input: strs = ["flower","flow","flight"]
        Output: "fl"
        
        Example 2:
        Input: strs = ["dog","racecar","car"]
        Output: ""
        Explanation: There is no common prefix among the input strings.
        
        Constraints:
        1 <= strs.length <= 200
        0 <= strs[i].length <= 200
        strs[i] consists of only lowercase English letters.
*/

var longestCommonPrefix = function(strs) {

    // if empty or one word
    if(strs.length == 0 ) return "";
    if(strs.length == 1 ) return strs[0].toString();

    var wordA = "";
    var wordB = "";
    var answer = [];
    console.log(strs[0].length)

    for(var x = 0 ; x<=200 ; x++)
    {
        console.log(answer.toString());
        for(var i = 0 ; i<strs.length-1 ; i++)
        {
            wordA = strs[i].toString();
            wordB = strs[i+1].toString();
            
            console.log(wordA[x]+ " and " +wordB[x]);

            if ( wordA.length == 0 || wordB.length == 0) return "";
            if ( wordA[x] == undefined || wordB[x] == undefined ) 
            {
                if(i>0)answer.pop();
                break;
            }
            
            if(wordA[x] != wordB[x])
            {
                if( (answer.length > 1 && i>=1) || i>=1) answer.pop();
                break;
            }
            else
                answer[x] = wordA[x];
                console.log("after if break")
        }
        if( answer.length != x+1) break;
    }
    console.log("string = " + answer.toString());
    return answer.toString().replace(/,/g, "");
    
};