export class Dates {
    year : number;
    month : number;
    day : number;
    constructor(year:number,month:number,day:number) {
       this.year = year;
        this.month = month;
        this.day = day;
    }
    /**
     * Les getters
     */
    get Year():number {
        return this.year;
      }
      get Month():number{
        return this.month;
      }
      get Day():number{
        return this.day;
      }
    
      /**
      * Les setters
      */
      set Year(value: number){
        if(value > 0){
          this.year = value;
        }else{
          console.log("Erreur l'année doit être suppérieur à 0");
        }
    
      }
      set Month(value:number){
        if(value >= 1 && value < 13 ){
          this.month = value;
        }else{
          console.log("Erreur la valeur du mois doit être compris entre 1 et 12")
        }
    
      }
      set Day(value:number){
        if(value > 1 && value < 32){
          this.day = value;
        }else{
          console.log("Le jour doit être dans [1;31]");
        }
      }
      toString():string{
        let date:string
        if(this.month < 10 || this.day < 10){
            date = this.year+'/0'+this.month+'/0'+this.day;
        }else{
          date = this.year+'/'+this.month+'/'+this.day;
        }
        return date;
      }

      create(year:number,month:number,day:number): string{
        this.year = year;
        this.month = month;
        this.day = day;
        let defaultDate = this.toString();
        return defaultDate;
      }

      setDate(year: number, month: number, day : number):string{
        
        if(year >0 && day>0 && day<32 && month >0 && month < 13){
            if( day>28 && month == 2){
                //return this.create(year,month,day);
                console.log("Le mois de fevrier ne compte pas plus de 28 jour(année non bixestile)");
            }else if( day== 31 && month == 4 ||month==6 || month == 9 || month == 11 ){
                console.log("Le mois que vous avez entrer ne comporte pas 31 jour")
            }else{
                return this.create(year,month,day);
            }
        }else{
            console.log("Veuillez entre un format de date correct svp!");
        }

        
      }
      yesterday():string{
        let date : string;
        if(this.day == 1){
          if(this.month == 1){
            date = (this.year-1)+'-'+12+'-'+31;
            //return date;
          }else if(this.month == 11 || this.month == 9 || this.month == 6 || this.month == 4){
            if(this.month < 10){
                date = this.year+'-0'+this.month+'-'+31;
            }else{
              date = this.year+'-'+(this.month-1)+'-'+31;
            }
            //return date;
          }else if(this.month == 12 || this.month == 10 || this.month == 8 || this.month == 7 || this.month == 5 || this.month == 2){
            if(this.month < 10){
                date = this.year+'-0'+this.month+'-'+30;
            }else{
              date = this.year+'-'+(this.month -1)+'-'+30;
            }
            //return date;
          }else if(this.month==3){
            date = this.year+'-0'+2+'-'+28;
            //  return this.year+'-0'+2+'-'+28;
        }
       }else{
         date = this.year+'-'+this.month+'-'+(this.day-1);
       }
        return date;
      }

      tomorrow():string{
        let date : string;
        if(this.month == 11 || this.month == 9 || this.month == 6 || this.month == 4){
          if(this.day == 30){
            if(this.month < 10){
                date = this.year+'-0'+this.month+'-0'+1;
            }else{
              date = this.year+'-'+this.month+'-0'+1;
            }
          }
        }else if(this.month == 10 || this.month == 8 || this.month == 7 || this.month == 5){
          if(this.day == 31){
            if(this.month < 10){
                date = this.year+'-0'+this.month+'-0'+1;
            }else{
              date = this.year+'-'+this.month+'-0'+1;
            }
          }
        }else if(this.month == 12){
          if(this.day == 31){
            date = (this.year+1)+'-'+this.month+'-0'+1;
          }
        }
        else if(this.month = 1){
          if(this.day = 31){
            date = this.year+'-0'+2+'-0'+1;
          }
        }else{
          date = this.year+'-'+this.month+'-'+(this.day+1);
        }
        return date;
      }

      addDay(day : number = 1):string{
        let date;
        if(this.month == 11 || this.month == 9 || this.month == 6 || this.month == 4){
          if((this.day + day) == 30){
            if(this.month < 10){
              date = this.year+'-0'+(this.month+1)+'-0'+1;
            }else{
              date = this.year+'-'+this.month+'-0'+1;
            }
          }
        }else if(this.month == 10 || this.month == 8 || this.month == 7 || this.month == 5){
          if(this.day == 31){
            if(this.month < 10){
              date = this.year+'-0'+(this.month+1)+'-0'+1;
            }else{
              date = this.year+'-'+this.month+'-0'+1;
            }
          }
        }else if(this.month == 12){
          if(this.day == 31){
            date = (this.year+1)+'-01-01';
          }
        }
        else if(this.month = 1){
          if(this.day = 31){
            date = this.year+'02-01';
          }
        }
        else if(this.month = 2){
            if(this.day = 31){
              date = this.year+'03-01';
            }
          }
          else if(this.month = 3){
            if(this.day = 31){
              date = this.year+'04-01';
            }
          }
          else if(this.month = 4){
            if(this.day = 31){
              date = this.year+'05-01';
            }
          }
          else if(this.month = 5){
            if(this.day = 31){
              date = this.year+'06-01';
            }
          }
          else if(this.month = 6){
            if(this.day = 31){
              date = this.year+'07-01';
            }
          }
          else if(this.month = 7){
            if(this.day = 31){
              date = this.year+'08-01';
            }
          }
          else if(this.month = 8){
            if(this.day = 31){
              date = this.year+'09-01';
            }
          }
          else if(this.month = 9){
            if(this.day = 31){
              date = this.year+'10-01';
            }
          }
          else if(this.month = 10){
            if(this.day = 31){
              date = this.year+'11-01';
            }
          }
          else if(this.month = 11){
            if(this.day = 31){
              date = this.year+'12-01';
            }
          }
        return date;
      }
      subYear(year : number = 1){
          if(year == 1){
              return (this.Year-1)+" - "+this.Month+"-"+this.day;
          }else{
              if(this.year - year <= 0){
                  console.log("Impossible d'enlever tout ce que vous demander car il n'existe pas d'année negative");
              }else{
                return (this.Year-year)+" - "+this.Month+"-"+this.day;
              }
          }
      }
      subDay(day : number = 1){
          if(day ==1 && this.day >1 ){
              return (this.year)+"-"+this.month+"-"+(this.day-1);
          }else if(day == 1 && this.day ==1){
            return (this.year)+"-"+(this.month-1)+"- 31";
          }else{
              if(day>1 && this.day>day){
                return (this.year)+"-"+this.month+"-"+(this.day-day);
              }else{
                  //bcdcjcbjbdcdcbdsjbhchjdsjcbdscjdbscbdsjbcjbdsjbcjdbscbdbscbjdbsjcbhjdbs
              }
          }
      }
      addMonth(month: number = 1):string{
        if(month == 1){
            return (this.year)+"-"+(this.month+1)+"-"+(this.day);
        }else{
            let reste = month%(12);
            if(reste == 0){
                return (this.year+(month/12))+"-"+this.month+"-"+(this.day);
            }else if(this.month+(month%(12)) <= 12){
                return (this.year+(month/12))+"-"+(this.month+(month%(12)))+"-"+(this.day);
            }else{
                let mois = this.month + month;
                return (this.year+(month/12))+"-"+(this.month+(month%(12)))+"-"+(this.day);
            }    
        }
      }
      addYear(year : number = 1):string{
        return (this.year+year)+"-"+this.month+"-"+(this.day);
      }
      subMonth(month:number = 1):string{
        if(this.month ==1 && month==1){
            return (this.year-1)+"- 12 -"+(this.day);
        }else if(month-this.month>0){
            return this.year+"-"+(this.month-month)+"-"+this.day;
        }else{
            let mois = 12+month;
            if(mois%12 == 0 ){
                return (this.year-(mois/12))+"-"+this.month+"-"+(this.day);
            }else{
                let reste = mois%12;
                if(reste < this.month && reste >0){
                    return (this.year-(mois/12))+"-"+(this.month-reste)+"-"+(this.day);
                }else{
                    reste = this.month - reste;
                    reste = 12+reste ;
                    this.month = reste;
                    return (this.year-(mois/12))+"-"+this.month+"-"+(this.day);
                }

            }
        }
      }


}
