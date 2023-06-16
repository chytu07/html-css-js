variable hoisting: 
	Solution: JavaScript linters and style guides often recommend putting all variable declarations at the top of the function.
function definition hoisting only occurs for function declarations, not function expressions.

undeclared assignment creates a property on a global object.
the difference between property assignment and variable declaration — latter one sets DontDelete, whereas  former one doesn’t — it should be clear why undeclared assignment creates a deletable property:

	var GLOBAL_OBJECT = this;

	/* create global property via variable declaration; property has DontDelete */
	var foo = 1;

	/* create global property via undeclared assignment; property has no DontDelete */
	bar = 2;

	delete foo; // false
	typeof foo; // "number"

	delete bar; // true
	typeof bar; // "undefined"

function declarations are instantiated after variable declarations

	function x(){ }
	var x;
	typeof x; // "function"

Here's a short summary of how deletion works in Javascript:

    Variables and function declarations are properties of either Activation or Global objects.
    Properties have attributes, one of which — DontDelete — is responsible for whether a property can be deleted.
    Variable and function declarations in Global and Function code always create properties with DontDelete.
    Function arguments are also properties of Activation object and are created with DontDelete.
    Variable and function declarations in Eval code always create properties without DontDelete.
    New properties are always created with empty attributes (and so without DontDelete).
    Host objects are allowed to react to deletion however they want.

Using Promises
	Always return results, otherwise callbacks won't catch the result of a previous promise (with arrow functions, () => x is short for () => { return x; }). If the previous handler started a promise but did not return it, there's no way to track its settlement anymore, and the promise is said to be "floating".

The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError.

await can be used on its own with JavaScript modules.

The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async/await is similar to combining generators and promises. 

Even though the return value of an async function behaves as if it's wrapped in a Promise.resolve, they are not equivalent.

An async function will return a different reference, whereas Promise.resolve returns the same reference if the given value is a promise.

It can be a problem when you want to check the equality of a promise and a return value of an async function.

	const p = new Promise((res, rej) => {
	res(1);
	});

	async function asyncReturn() {
	return p;
	}

	function basicReturn() {
	return Promise.resolve(p);
	}

	console.log(p === basicReturn()); // true
	console.log(p === asyncReturn()); // false

# DOM
- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.