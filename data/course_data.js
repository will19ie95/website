var courses = [
    {
        name: "CSE 114",
        alias: "Computer Science I",
        desc: "An introduction to procedural and object-oriented programming methodology. Topics include program structure, conditional and iterative programming, procedures, arrays and records, object classes, encapsulation, information hiding, inheritance, polymorphism, file I/O, and exceptions. Includes required laboratory. This course has been designated as a High Demand/Controlled Access (HD/CA) course. Students registering for HD/CA courses for the first time will have priority to do so."
    }, {
        name: "CSE 214",
        alias: "Computer Science II",
        desc: "An extension of programming methodology to data storage and manipulation on complex data sets. Topics include: programming and applications of data structures; stacks, queues, lists, binary trees, heaps, priority queues, balanced trees and graphs. Recursive programming is heavily utilized. Fundamental sorting and searching algorithms are examined along with informal efficiency comparisons."
    }, {
        name: "CSE 219",
        alias: "Computer Science III",
        desc: "Development of the basic concepts and techniques learned in CSE 114 Computer Science I and CSE 214 Computer Science II into practical programming skills that include a systematic approach to program design, coding, testing, and debugging. Application of these skills to the construction of robust programs of 1000 to 2000 lines of source code. Use of programming environments and tools to aid in the software development process."
    }, {
        name: "CSE 220",
        alias: "Systems Fundamentals I",
        desc: "This course will introduce assembly language programming and essential concepts of computer organization and architecture. The focus of this course is on the computer organization of a computer system, including the processor architecture and the memory system. In particular, we will discuss the internal representation of information, performance evaluation methodology, instruction set architectures and implementation techniques for computer arithmetic, control path design, and pipelining."
    }
    
]

var courses_2 = [
    {
        name: "CSE 305",
        alias: "Principles of Database Systems",
        desc: "The design of database management systems to obtain consistency, integrity, and availability of data. Conceptual models and schemas of data: relational, hierarchical, and network. Students undertake a semester project that includes the design and implementation of a database system."
    }, {
        name: "CSE 308",
        alias: "Software Engineering",
        desc: "Introduces the basic concepts and modern tools and techniques of software engineering. Emphasizes the development of reliable and maintainable software via system requirements and specifications, software design methodologies including object-oriented design, implementation, integration, and testing; software project management; life-cycle documentation; software maintenance; and consideration of human factor issues."
    }, {
        name: "CSE 320",
        alias: "Systems Fundamentals II",
        desc: "This course will introduce C programming and essential concepts of operating systems, compilers, concurrency, and performance analysis, focused around several cross-cutting examples, such as memory management, error handling, and threaded programming."
    }, {
        name: "CSE 373",
        alias: "Analysis of Algorithms",
        desc: "Mathematical analysis of a variety of computer algorithms including searching, sorting, matrix multiplication, fast Fourier transform, and graph algorithms. Time and space complexity. Upper-bound, lower- bound, and average-case analysis. Introduction to NP completeness. Some machine computation is required for the implementation and comparison of algorithms. This course is offered as CSE 373 and MAT 373."
    },

]



module.exports = {
    courses: courses,
    courses_2: courses_2
};