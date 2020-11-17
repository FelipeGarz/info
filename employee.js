//define the actions of the Employee object, method
function printEmployee()
    {
        var name_line = "<td>" + this.name + "</td>";
        var title_line = "<td>" + this.title + "</td>";
        var phone_line = "<td>" + this.phone + "</td>";

        var row = "<tr>" + name_line + title_line + phone_line + "</tr>";
        document.write(row); 
    }

//define an object using construcotr funtion
function Employee(name, title, phone)
{
    //list of attributes for this obbject
    this.name = name; 
    this.title = title;
    this.phone = phone;
    // assign mwthod to the employee object
    this.printEmployee = printEmployee
}

//create employee objects 
var felipe = new Employee("Felipe", " Worker", "(956) 123-5467");
var lisa = new Employee("Lisa Simpson", "teacher", "(956) 321-5674");
var mike = new Employee("Mike Tyson", "Boxer", "(956) 784-2084");
//display the employee information
//felipe.printEmployee();
//lisa.printEmployee();
//mike.printEmployee();

//create an array of employee names
var empArray = [felipe.name, lisa.name, mike.name];

empArray = empArray.sort(); //built-in sort function sorts letters but not numbers

for(var counter = 0; counter < empArray.length; counter++)
{
    document.write(empArray[counter] + "<br>");
}