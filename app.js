var znojmo=[10, 20, 30, 40, 50]
var brno=[40, 20, 30, 10, 50]
var x= Math.random()*100
var y
console.log (znojmo[3])
if (x>znojmo[3])
	{
	console.log ('Hello!')
	console.log (x)

	}
else
	{
	console.log ('Good Bye!')
	console.log (x)
	}
MyFirstFnc(znojmo)
MyFirstFnc(brno)

function MyFirstFnc (MyInp)	
{
	for (y=0;y<MyInp.length;y++)
	{
	console.log (MyInp[y])

	}
}