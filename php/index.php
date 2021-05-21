<?php
$conn=new mysqli("localhost","root","","portfolio","3306");
if(!$conn){
  die("Connection failed");
}

if (isset($_REQUEST['contact-submit'])) {
    $RNAME=$_REQUEST['name'];
    $REMAIL=$_REQUEST['Email'];
    $MESSAGE=$_REQUEST['message'];
    echo "outside working";
    $createTable="CREATE TABLE contact_area(id int auto_increment primary key,name varchar(30),email varchar(30),messeges text)";
    $TableCreated=$conn->query($createTable);
    $sql="INSERT INTO contact_area(name,email,messeges) values('$RNAME','$REMAIL','$MESSAGE')";
    $result=$conn->query($sql);
    if ($result==true){
        echo "work";
        $Registor='<div class="alert alert-success mt-3" role="alert">Registor Successfully</div>';}
    else{
        echo " not work";
        $N_Registor='<div class="alert alert-danger mt-3" role="alert">Registration failed</div>';
    }
    
    
}
?>
