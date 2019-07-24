	var fev=0;
	var cold=0;
	var mal=0;
	var den=0;
	var typh=0;
	var chip=0;
function toggle1(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("fev=",++fev);   
		console.log("cold=",++cold);
		console.log("chip=",++chip);     
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
		console.log("fev=",--fev);   
		console.log("cold=",--cold);
		console.log("chip=",--chip);         
    }
}
function toggle2(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("fev=",++fev); 
		console.log("mal=",++mal); 
		console.log("typh=",++typh); 
		console.log("den=",++den);
        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
       	console.log("fev=",--fev); 
		console.log("mal=",--mal); 
		console.log("typh=",--typh); 
		console.log("den=",--den);
    }
} 
function toggle3(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("fev=",++fev); 
		console.log("mal=",++mal);         
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("fev=",--fev); 
		console.log("mal=",--mal); 
        
    }
} 
function toggle4(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("fev=",++fev); 
		console.log("mal=",++mal); 
		console.log("cold=",++cold);
        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("fev=",--fev); 
		console.log("mal=",--mal); 
		console.log("cold=",--cold);
        
    }
} 
function toggle5(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("fev=",++fev);
		console.log("mal=",++mal);         
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("fev=",--fev);
        console.log("mal=",--mal);
    }
} 
function toggle6(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("fev=",++fev); 
		console.log("mal=",++mal); 
		console.log("den=",++den);
		console.log("typh=",++typh);
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("fev=",--fev); 
		console.log("mal=",--mal); 
		console.log("den=",--den);
		console.log("typh=",--typh);
        
    }
} 
function toggle7(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
        console.log("mal=",++mal); 
		console.log("cold=",++cold);        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
		console.log("mal=",--mal); 
		console.log("cold=",--cold);        
    }
} 
function toggle8(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("cold=",++cold); 
		console.log("fev=",++fev);        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("fev=",--fev); 
		console.log("cold=",--cold);      
    }
} 
function toggle9(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
        console.log("cold=",++cold);       
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("cold=",--cold);
    }
} 
function toggle10(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("cold=",++cold); 
		console.log("den=",++den);        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("cold=",--cold); 
		console.log("den=",--den);        
    }
} 
function toggle11(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("mal=",mal+=2);         
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
		console.log("mal=",mal-=2);     
    }
} function toggle12(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes"; 
		console.log("cold=",++cold); 
		console.log("den=",++den);
		console.log("typh=",++typh);     
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("cold=",--cold); 
		console.log("den=",--den);
		console.log("typh=",--typh);  
    }
} 
function toggle13(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes"; 
		console.log("den=",den+=2);       
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
		console.log("den=",den-=2);
    }
} 
function toggle14(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("den=",++den);
		console.log("chip=",++chip)
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
		console.log("den=",--den);
		console.log("chip=",--chip);
	}
} 
function toggle15(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes"; 
		console.log("den=",++den);
		console.log("typh=",++typh);        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
		console.log("den=",--den);
		console.log("typh=",--typh);
        
    }
} 
function toggle16(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("den=",++den);
		console.log("cold=",++cold);        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
		console.log("den=",--den);
		console.log("cold=",--cold);        
    }
} 
function toggle17(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
		console.log("typh=",typh+=2);
        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
		console.log("typh=",typh-=2);        
    }
} 
function toggle18(button) {
    if(button.value=="no") {
        button.value="yes";
        button.innerHTML="yes";
        console.log("den=",++den);
		console.log("chip=",chip+=2);        
    } else if(button.value=="yes") {
        button.value="no";
        button.innerHTML="no";
        console.log("den=",--den);
		console.log("chip=",chip-=2);
    }
}