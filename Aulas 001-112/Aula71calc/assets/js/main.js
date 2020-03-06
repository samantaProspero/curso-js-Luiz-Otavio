function Calculadora(){
    this.display= document.querySelector('.display');
    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };
    this.pressionaEnter=()=>{
        this.display.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
                this.realizaConta();
        });12
    };
   this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.btnParaDisplay(el);
            if(el.classList.contains('btn-clear'))this.clearDisplay();
            if(el.classList.contains('btn-del'))this.apagaUm();
            if(el.classList.contains('btn-eq'))this.realizaConta();
            this.display.focus();
        });
    };
    this.realizaConta=()=>{
        try {
            let conta = eval(this.display.value);
            if(!conta){
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;

        } catch(e){
            alert('Conta inválida');
            return;
        }
    };
    this.btnParaDisplay= el => {2*3
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clearDisplay=()=>this.display.value = '';
    
    this.apagaUm=()=>this.display.value = this.display.value.slice(0,-1);
};
const calculadora = new Calculadora();
calculadora.inicia();
   