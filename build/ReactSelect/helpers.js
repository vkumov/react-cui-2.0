function isGrouped(v){return"options"in v}function findOption(value,options){var found;var _iteratorNormalCompletion=true,_didIteratorError=false,_iteratorError=undefined;try{for(var _iterator=options[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var it=_step.value;if(isGrouped(it))found=findOption(value,it.options);else found=it.value===value?it:null;if(found)return found}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}}function findOptions(values,options){var found=[];if(!Array.isArray(values)||values.length<=0)return found;var _iteratorNormalCompletion=true,_didIteratorError=false,_iteratorError=undefined;try{for(var _iterator=values[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var v=_step.value;var fv=findOption(v,options);if(fv)found.push(fv);else found.push({value:v,label:v})}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator.return!=null){_iterator.return()}}finally{if(_didIteratorError){throw _iteratorError}}}return found}export{findOption,findOptions,isGrouped};
//# sourceMappingURL=helpers.js.map
