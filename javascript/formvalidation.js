function validate()
	    {
		var flag=0;
		with(document)
		{
		    
		    var alpha=/[^a-zA-Z]/;
		    var fn1=frmReg.fname.value;
		    if(fn1==""||!(isNaN(fn1))||(fn1.match(alpha)))
            {
			     var fn=document.getElementById("fnm");
			     fn.style.display="";
			     frmReg.fname.value="";
	             frmReg.fname.focus();
			     flag=1;
			//return false;
            }
		    var ln1=frmReg.lname.value;
		    if(ln1==""||!(isNaN(ln1))||(ln1.match(alpha)))
            {
	             var ln=document.getElementById("lnm");
			     ln.style.display="";
			     frmReg.lname.value="";
	             frmReg.lname.focus();
			     flag=1;
        	        //return false;
            }
		    if(frmReg.addr.value=="")
            {
	             var a=document.getElementById("ad");
			     a.style.display="";
                 frmReg.addr.focus();
			     flag=1;
         	        // return false;
            }
            var CheckZipCode = /[^0-9]/;
            var z1=frmReg.zip.value;
            if(z1==""||(z1.match(CheckZipCode))||z1.length<6||z1.length>6)
            {
                var z=document.getElementById("zip1");
                z.style.display="";
                frmReg.zip.focus();
                flag=1;
                //return false;
            }
		    var s1=frmReg.uname.value;
		    if(s1==""||!isNaN(s1.charAt(0)))
            {
	             var un=document.getElementById("unm");
			     un.style.display="";
			     frmReg.uname.value="";
	             frmReg.uname.focus();
			     flag=1;
        	        //return false;
            }
             var emailFilter=/^.+@.+\..{2,3}$/;
		    if (!(emailFilter.test(frmReg.email.value))) 
           	{ 
	             var em=document.getElementById("eml1");
			     em.style.display="";
           		 frmReg.email.focus();
			     flag=1;
        	        //return false;
           	}
		    var illegalChars= /[\(\)\ \,\;\:\\\/\"\[\]]/
		    if (frmReg.email.value.match(illegalChars))
           	{
                 var em1=document.getElementById("eml1");
			     var em=document.getElementById("eml2");
			     em1.style.display="";
			     em.style.display="";
           		 frmReg.email.focus();
			     flag=1;
			//return false;
           	}
		    var ph=frmReg.phone.value;
		    if((ph.length < 8)||(isNaN(ph)))
		    {
        	     var ph1=document.getElementById("ph");
			     ph1.style.display="";
			     frmReg.phone.value="";
			     frmReg.phone.focus();
			     flag=1;
        	        //return false;
		    }
		    if(frmReg.pwd.value.length<6)
            {
	             var pw=document.getElementById("pwdd");
			     pw.style.display="";
	             frmReg.pwd.focus();
			     flag=1;
        	        //return false;
            }
	       if(frmReg.cpwd.value=="")
            {
        	     var pw1=document.getElementById("pwd1");
			     pw1.style.display="";
	             frmReg.cpwd.focus();
			     flag=1;
        	        //return false;
            }
		    if (frmReg.pwd.value != frmReg.cpwd.value)
            {
	             var pw2=document.getElementById("pwd2");
			     pw2.style.display="";
           		 frmReg.pwd.focus();
			     flag=1;
        	        //return false;
           	}
            if(flag==0)
		    {
                 window.open("home.html");
			     return true;
		    }
		    else
			     return false;
		}
	    } 
	    function reset1()
	    {
		fn=document.getElementById("fnm");
			fn.style.display="none";
		ln=document.getElementById("lnm");
			ln.style.display="none";
		a=document.getElementById("ad");
			 a.style.display="none";
        z=document.getElementById("zip1");
            z.style.display="none";
		un=document.getElementById("unm");
			un.style.display="none";
        em=document.getElementById("eml1");
			em.style.display="none";
        ph1=document.getElementById("ph");
			ph1.style.display="none";
		pw=document.getElementById("pwdd");
			pw.style.display="none";
		pw1=document.getElementById("pwd1");
			pw1.style.display="none";
		pw2=document.getElementById("pwd2");
			pw2.style.display="none";
	    }
            
            
