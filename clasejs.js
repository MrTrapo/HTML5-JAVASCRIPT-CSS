function lista()
{
var self=this;
self._nom="eric";
self._ed="27";
self._ciu="mex";

lista.prototype.nombre=function(nom)
{
if (nom==undefined)
{self._nom=self._nom;}
else{self._nom=nom}
return self._nom;
}

lista.prototype.edad=function(ed)
{
if (ed==undefined)
{self._ed=self._ed;}
else{self._ed=ed}
return self._ed;
}

lista.prototype.ciudad=function(ciu)
{
if (ciu==undefined)
{self._ciu=self._ciu;}
else{self._ciu=ciu}
return self._ciu;
}

}
