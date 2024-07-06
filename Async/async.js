// Terms to know before Async ;
//  Javascript is a Synchronous language means it run by step by step process
//  Javascript is a single threaded language means everything works in one thread.
//  this single thread means it executes thing one by one from top to bottom and each Operation waits forthe last
//  one to complete before moving towards next operation.
// Synchronous is divided into two parts;
// Blocking code :- here A code or action is carried one at a time and for that action you are not supposed to do 
//                 anything else so you have to wait untill it gets over. Ex fetching data from file in this you 
//                 are not allowed to fetch more than one thing at a time.
// Non-Blocking code :- here many code can be executed even before the first code finish after you started second operation.
// Ex. Suppose a user visited a website course and he click on the course and before the data of user get stored in memory
// he is allowed to access the courses. Whic is a bad thing!!!
// 
// In simple terms Blocking code= block the flow of code. and 
 // Non-Blocking code= Does not block the execution of second code before the first code ended.
// BLocking code also called Read file Sync.
// Non-Blocking code also called Read file Async.
//  Javascript engine made up of Memory heap and call stack.
// 
// Process of Execution of an task
//  JS Engine ------> Web API -------------> Task Queue ----------------->Adding to JS Engine
//  consist of       Inside this Dom API     Where all the call backs     then these call backs
//  Memory heap,     here,Every functions    are store in Queue which is  gets added in call stacks like a stack way
//  Call stacks.     Executed.And the track  "Last In First Out" just     Which is "FIrst In Last Out". then same
//        |           all the calls back are  like Mcdonald Drive through. things happens again and again.
//        |           Recorded in "Register     |
//        |             CALL BACKS"             |
//        |                                     |
//        |       (New way For Advanced work)   |
//        |--------> Fetch()--------------------|
//                 Same work is done in this like it will pass it to task queue
//                 but fetch has high priority than other functions.